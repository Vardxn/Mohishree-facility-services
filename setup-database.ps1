# Database Setup Script for Windows PowerShell

Write-Host "🚀 Mohishree Facility Services - Database Setup" -ForegroundColor Cyan
Write-Host ""

# Check if PostgreSQL is installed
$psqlPath = Get-Command psql -ErrorAction SilentlyContinue

if (-not $psqlPath) {
    Write-Host "❌ PostgreSQL is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install PostgreSQL from: https://www.postgresql.org/download/windows/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installation, add PostgreSQL bin folder to PATH:" -ForegroundColor Yellow
    Write-Host "  C:\Program Files\PostgreSQL\16\bin" -ForegroundColor Gray
    exit 1
}

Write-Host "✅ PostgreSQL found" -ForegroundColor Green

# Database configuration
$DB_NAME = "mohishree_facility_services"
$DB_USER = "postgres"

Write-Host ""
Write-Host "📝 Please enter your PostgreSQL password:" -ForegroundColor Yellow
$DB_PASSWORD = Read-Host -AsSecureString
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($DB_PASSWORD)
$PlainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# Set environment variable for psql
$env:PGPASSWORD = $PlainPassword

Write-Host ""
Write-Host "Step 1: Creating database..." -ForegroundColor Cyan

# Create database
psql -U $DB_USER -c "DROP DATABASE IF EXISTS $DB_NAME;" 2>$null
psql -U $DB_USER -c "CREATE DATABASE $DB_NAME;"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Database created: $DB_NAME" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create database" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: Running schema.sql..." -ForegroundColor Cyan

# Run schema
psql -U $DB_USER -d $DB_NAME -f "database\schema.sql"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Schema created successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create schema" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 3: Running seed.sql..." -ForegroundColor Cyan

# Run seed data
psql -U $DB_USER -d $DB_NAME -f "database\seed.sql"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Seed data loaded successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to load seed data" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 4: Updating .env.local..." -ForegroundColor Cyan

# Update .env.local
$DATABASE_URL = "postgresql://${DB_USER}:${PlainPassword}@localhost:5432/${DB_NAME}"
$envContent = Get-Content .env.local
$envContent = $envContent -replace 'DATABASE_URL=".*"', "DATABASE_URL=`"$DATABASE_URL`""
$envContent | Set-Content .env.local

Write-Host "✅ .env.local updated" -ForegroundColor Green

# Clear password from environment
$env:PGPASSWORD = $null

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "✅ Database setup completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Test connection: node test-db.js" -ForegroundColor Gray
Write-Host "  2. Start dev server: npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "Default admin credentials:" -ForegroundColor Yellow
Write-Host "  Email: admin@mohishreefacilityservices.com" -ForegroundColor Gray
Write-Host "  Password: Admin@123" -ForegroundColor Gray
Write-Host ""
