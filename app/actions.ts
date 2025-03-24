"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const role = formData.get("role")?.toString(); // "student" o "elder"

  // Datos específicos de cada rol
  const birth_date = formData.get("birth_date")?.toString();
  let additionalData: any = {};

  if (role === "student") {
    additionalData = {
      university: formData.get("university")?.toString(),
      course: formData.get("course")?.toString(),
    };
  } else if (role === "elder") {
    additionalData = {
      apartment_address: formData.get("apartment_address")?.toString(),
      monthly_rent: parseFloat(formData.get("monthly_rent")?.toString() || "0"),
    };
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password || !role || !birth_date) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "All fields are required"
    );
  }

  // Crear usuario en auth.users con metadata
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { role }, // Guardar el rol en metadata
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  const userId = data.user?.id;
  if (!userId) {
    return encodedRedirect("error", "/sign-up", "User ID not found");
  }

  // Insertar en la tabla correspondiente (students o elders)
  const table = role === "student" ? "students" : "elders";
  const { error: insertError } = await supabase.from(table).insert({
    id: userId,
    birth_date,
    status: "REGISTERED",
    ...additionalData,
  });

  if (insertError) {
    console.error(insertError.message);
    return encodedRedirect("error", "/sign-up", "Error creating profile");
  }

  return encodedRedirect(
    "success",
    "/sign-in",
    "Gracias por registrarte! Por favor, revisa tu correo electrónico para verificar tu cuenta."
  );
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return encodedRedirect("error", "/sign-in", "Usuario no encontrado.");
  }

  const role = user.app_metadata?.role;

  switch (role) {
    case "admin":
      return redirect("/admin");
    case "elder":
      return redirect("/elder");
    case "student":
      return redirect("/student");
    default:
      return redirect("/");
  }
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const registerElderAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const role = "elder"
  const birth_date = formData.get("birth_date")?.toString();


  let additionalData = {
      apartment_address: formData.get("apartment_address")?.toString(),
      monthly_rent: parseFloat(formData.get("monthly_rent")?.toString() || "0"),
    };

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password || !role) {
    return encodedRedirect(
      "error",
      "/admin/registrar-mayor",
      "All fields are required"
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { role },
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  const userId = data.user?.id;
  if (!userId) {
    return encodedRedirect("error", "/sign-up", "User ID not found");
  }

  const { error: insertError } = await supabase.from("elders").insert({
    id: userId,
    birth_date,
    status: "MATCHMAKING",
    ...additionalData,
  });

  if (insertError) {
    console.error(insertError.message);
    return encodedRedirect("error", "/admin/registrar-mayor", "Error creating profile");
  }

  return encodedRedirect(
    "success",
    "/admin",
    "Un nuevo mayor se ha unido al programa Conest"
  );
};

// ROLES

export const checkAdminAction = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const role = user?.app_metadata?.role;

  if (!user || user.app_metadata?.role !== "admin") {
    redirect("/");
  }

};