
resource "vercel_project" "crea-public-2" {
  name                       = "crea-public-2"
  serverless_function_region = "iad1"
  vercel_authentication = {
    protect_production = false
  }
}

resource "vercel_project_environment_variable" "crea-public-2" {
  project_id = vercel_project.crea-public-2.id
  key        = "foo"
  value      = "bar"
  target     = ["production"]
}

resource "vercel_project_domain" "crea-public-2" {
  project_id = vercel_project.crea-public-2.id
  domain     = "crea-public-2.vercel.app"
}

