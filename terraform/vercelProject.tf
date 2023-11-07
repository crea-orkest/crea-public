
resource "vercel_project" "crea-public-2" {
  name                       = "crea-public-2"
}

resource "vercel_project_environment_variable" "crea-public-2" {
  project_id = vercel_project.crea-public-2.id
  key        = "foo"
  value      = "bar"
  target     = ["production"]
}
