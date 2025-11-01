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

variable "vercel_api_token" {
  sensitive = true
  type      = string
  default   = ""
}

variable "cloudflare_api_token" {
  sensitive = true
  type      = string
  default   = ""
}

variable "GOOGLE_MAPS_API_KEY" {
  sensitive = false
  type      = string
  default   = ""
}

variable "GOOGLE_MAPS_STATIC_API_KEY" {
  sensitive = false
  type      = string
  default   = ""
}

variable "production" {
  sensitive = false
  type      = string
  default   = "true"
}

variable "MAILCHIMP_SUBSCRIBE_URL" {
  sensitive = false
  type      = string
  default   = ""
}

variable "TFC_CONFIGURATION_VERSION_GIT_COMMIT_SHA" {
  type    = string
  default = ""
}
variable "TFC_CONFIGURATION_VERSION_GIT_TAG" {
  type    = string
  default = ""
}

variable "TFC_CONFIGURATION_VERSION_GIT_BRANCH" {
  type    = string
  default = ""
}

