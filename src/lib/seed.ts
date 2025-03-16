import { supabase } from './supabase'

export async function createTestUser() {
  console.log('Starting test user creation...')
  
  // Verificar la conexión con Supabase
  const { data: testData, error: testError } = await supabase.from('profiles').select('count').limit(1)
  if (testError) {
    console.error('Error connecting to Supabase:', testError)
    throw new Error('No se pudo conectar a Supabase')
  }
  console.log('Supabase connection successful')

  // Crear usuario en auth
  console.log('Creating auth user...')
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: 'test@example.com',
    password: 'test123456',
  })

  if (authError) {
    console.error('Error creating auth user:', authError)
    throw authError
  }

  if (!authData.user) {
    console.error('No user data returned')
    throw new Error('No se recibieron datos del usuario')
  }

  console.log('Auth user created successfully:', authData.user.id)

  // Crear perfil
  console.log('Creating profile...')
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: authData.user.id,
      user_type: 'student',
      full_name: 'Estudiante de Prueba',
      bio: 'Estudiante internacional buscando alojamiento en España',
      location: 'Madrid',
      date_of_birth: '2000-01-01',
      phone_number: '+34600000000',
      emergency_contact: '+34600000001',
      preferences: {
        schedule: ['mañana', 'tarde'],
        pets_allowed: true,
        smoking_allowed: false,
        activities: ['cocinar', 'deportes', 'cultura'],
        help_needed: ['cocinar', 'limpieza'],
        study_field: 'Ingeniería Informática',
        university: 'Universidad Complutense de Madrid',
        availability: ['septiembre', 'octubre', 'noviembre', 'diciembre']
      },
      verification_status: 'verified',
      has_paid: true
    })
    .select()

  if (profileError) {
    console.error('Error creating profile:', profileError)
    throw profileError
  }

  console.log('Profile created successfully:', profileData)
  return profileData
} 