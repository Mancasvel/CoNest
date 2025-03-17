-- Agregar campos relacionados con pagos a la tabla profiles
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS payment_id UUID REFERENCES matching_payments(id);

-- Crear un índice para mejorar el rendimiento de las consultas por has_paid
CREATE INDEX IF NOT EXISTS idx_profiles_has_paid ON profiles(has_paid);

-- Crear un índice para mejorar el rendimiento de las consultas por payment_id
CREATE INDEX IF NOT EXISTS idx_profiles_payment_id ON profiles(payment_id);

-- Actualizar las políticas de seguridad para los nuevos campos
ALTER POLICY "Los usuarios pueden ver sus propios perfiles."
    ON profiles
    FOR SELECT
    USING (auth.uid() = id);

ALTER POLICY "Los usuarios pueden actualizar sus propios perfiles."
    ON profiles
    FOR UPDATE
    USING (auth.uid() = id); 