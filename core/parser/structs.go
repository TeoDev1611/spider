package parser

// Scoop Data Struct
type scoop struct {
  Pkg string `toml:"pkg"`
}

// Choco Data Struct
type choco struct {
  Pkg string `toml:"pkg"`
  PreRelease bool `toml:"nightly"`
}

// Git Data Struct
type git struct {
  Repo string `toml:"repo"`
  UserFolder bool `toml:"userFolder"`
  Destination string `toml:"dest"`
}

// List Of Packages from Scoop
type ScoopPackages struct{
  Packages []scoop
}

// List Of Packages from Choco
type ChocoPackages struct {
  Packages []choco
}

// List of Packages from Git
type GitPackages struct {
  Packages []git
}
