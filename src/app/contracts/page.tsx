"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/hooks/use-auth"
import { ContractForm } from "@/components/contracts/contract-form"
import { ContractDetails } from "@/components/contracts/contract-details"

type Contract = Database["public"]["Tables"]["contracts"]["Row"]
type Profile = Database["public"]["Tables"]["profiles"]["Row"]

export default function ContractsPage() {
  const router = useRouter()
  const { user, profile } = useAuth()
  const [contracts, setContracts] = useState<Contract[]>([])
  const [matches, setMatches] = useState<
    { id: string; other_user: Profile | null }[]
  >([])
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    loadContracts()
    loadMatches()
  }, [user])

  async function loadContracts() {
    try {
      setLoading(true)
      setError(null)

      const { data: contractsData, error: contractsError } = await supabase
        .from("contracts")
        .select("*")
        .or(`host_id.eq.${user?.id},student_id.eq.${user?.id}`)
        .order("created_at", { ascending: false })

      if (contractsError) throw contractsError

      setContracts(contractsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar contratos")
    } finally {
      setLoading(false)
    }
  }

  async function loadMatches() {
    if (!profile) return

    try {
      const { data: matchesData, error: matchesError } = await supabase
        .from("matches")
        .select("id, host_id, student_id")
        .or(
          `and(host_id.eq.${user?.id},host_accepted.eq.true,student_accepted.eq.true),and(student_id.eq.${user?.id},host_accepted.eq.true,student_accepted.eq.true)`
        )

      if (matchesError) throw matchesError

      const matchesWithProfiles = await Promise.all(
        matchesData.map(async (match) => {
          const otherId =
            match.host_id === user?.id ? match.student_id : match.host_id
          const { data: otherProfile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", otherId)
            .single()

          return {
            id: match.id,
            other_user: otherProfile,
          }
        })
      )

      setMatches(matchesWithProfiles)
    } catch (err) {
      console.error("Error loading matches:", err)
    }
  }

  function handleContractCreated(contract: Contract) {
    setContracts([contract, ...contracts])
    setShowForm(false)
    loadContracts()
  }

  function handleStatusChange(contractId: string, newStatus: Contract["status"]) {
    setContracts(
      contracts.map((c) =>
        c.id === contractId ? { ...c, status: newStatus } : c
      )
    )
  }

  if (!user || !profile) {
    return null
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Contratos</h1>
        {matches.length > 0 && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {showForm ? "Cancelar" : "Nuevo contrato"}
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-8 rounded-lg border p-6">
          <h2 className="mb-4 text-lg font-medium">Nuevo contrato</h2>
          <ContractForm
            matchId={matches[0].id}
            hostId={profile.type === "host" ? user.id : matches[0].other_user?.id!}
            studentId={
              profile.type === "student" ? user.id : matches[0].other_user?.id!
            }
            onSuccess={handleContractCreated}
          />
        </div>
      )}

      {loading ? (
        <div className="text-center">Cargando contratos...</div>
      ) : contracts.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-gray-500">No hay contratos disponibles</p>
          {matches.length === 0 && (
            <p className="mt-2 text-sm text-gray-400">
              Primero debes tener un match para poder crear un contrato
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="rounded-lg border p-6 transition-shadow hover:shadow-md"
            >
              {selectedContract?.id === contract.id ? (
                <>
                  <button
                    onClick={() => setSelectedContract(null)}
                    className="mb-4 text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Volver a la lista
                  </button>
                  <ContractDetails
                    contract={contract}
                    userRole={profile.type}
                    onStatusChange={(newStatus) =>
                      handleStatusChange(contract.id, newStatus)
                    }
                  />
                </>
              ) : (
                <div
                  onClick={() => setSelectedContract(contract)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        Contrato del{" "}
                        {format(new Date(contract.start_date), "PPP", {
                          locale: es,
                        })}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {contract.status === "pending" && "Pendiente de firmas"}
                        {contract.status === "active" && "Activo"}
                        {contract.status === "completed" && "Completado"}
                        {contract.status === "cancelled" && "Cancelado"}
                      </p>
                    </div>
                    <p className="text-lg font-medium">
                      ${contract.monthly_rent.toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} MXN
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 