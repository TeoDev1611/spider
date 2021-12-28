package health

import "os/exec"

// Check the tools for windows
// Return: ScoopExists, GitExists, Chocolatey Exists
func CheckToolsHealthWin() (bool, bool, bool) {
	_, errScoop := exec.LookPath("scoop")
	_, errGit := exec.LookPath("git")
	_, errChoco := exec.LookPath("choco")
	return errScoop == nil, errGit == nil, errChoco == nil
}

// Check the tools for linux
// Return: GitExists, SnapExists
func CheckToolsHealthLinux() (bool, bool) {
	_, errGit := exec.LookPath("git")
	_, errSnap := exec.LookPath("snap")
	return errGit == nil, errSnap == nil
}

// Check the tools for MacOS
// Return: GitExists, BrewExists
func CheckToolsHealthMacOs() (bool, bool) {
	_, errGit := exec.LookPath("git")
	_, errBrew := exec.LookPath("brew")
	return errGit == nil, errBrew == nil
}
