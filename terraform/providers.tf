provider "aws" {
  region = var.aws_region
}

provider "hcp" {
  project_id = var.hcp_project_id
}

provider "cloudflare" {
  api_token = data.hcp_vault_secrets_app.crea.secrets.cloudflare_api_token
}

provider "vercel" {
  api_token = data.hcp_vault_secrets_app.crea.secrets.vercel_api_token
  team      = var.vercel_team_id
}
