# Specify the app in the project (one app_name per data block)
data "hcp_vault_secrets_app" "crea" {
  app_name = "crea"
  # Limit the scope to only one or more secrets in the app
}
