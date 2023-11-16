variable "aws_region" {
  sensitive = false
  type      = string
  default   = "eu-central-1"
}

variable "cloudflare_zone_id" {
  sensitive = true
  type      = string
  default   = ""
}

variable "cloudflare_account_id" {
  sensitive = true
  type      = string
  default   = ""
}

variable "hcp_project_id" {
  sensitive = false
  type      = string
  default   = ""
}

variable "vercel_team_id" {
  sensitive = false
  type      = string
  default   = ""
}

variable "GOOGLE_CREDENTIALS" {
  sensitive = true
  type      = string
  default   = ""
}
