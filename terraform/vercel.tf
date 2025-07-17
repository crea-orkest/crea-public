resource "vercel_project" "crea" {
  name                       = "crea-public"
  framework                  = "nextjs"
  install_command            = "npm i"
  build_command              = "turbo build"
  serverless_function_region = "fra1"
}

data "vercel_project_directory" "crea" {
  path = "./"
}

resource "vercel_deployment" "crea" {
  project_id  = resource.vercel_project.crea.id
  files       = data.vercel_project_directory.crea.files
  path_prefix = data.vercel_project_directory.crea.path
  production  = var.TFC_CONFIGURATION_VERSION_GIT_TAG != "" ? true : false
}

resource "vercel_project_deployment_retention" "crea" {
  project_id            = vercel_project.crea.id
  team_id               = vercel_project.crea.team_id
  expiration_preview    = "1m"
  expiration_production = "1y"
  expiration_canceled   = "1m"
  expiration_errored    = "1m"
}

resource "vercel_project_environment_variables" "crea" {
  project_id = vercel_project.crea.id
  variables = [{
    key       = "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
    value     = var.GOOGLE_MAPS_API_KEY
    target    = ["preview", "production"]
    sensitive = false
  }]
}
