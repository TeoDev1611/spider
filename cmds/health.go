package cmds

import (
	"fmt"
	"runtime"

	"github.com/TeoDev1611/batman/log"
	"github.com/TeoDev1611/spider/core/health"
)

var (
	scoop, gitWin, choco = health.CheckToolsHealthWin()
	gitLinux, snap       = health.CheckToolsHealthLinux()
	gitMacOS, brew       = health.CheckToolsHealthMacOs()
)

func HealthCmd() {
	os := runtime.GOOS
	switch os {
	case "windows":
		if !scoop {
			log.Error("Scoop not found")
		}
		if !gitWin {
			log.Error("Git not found")
		}
		if !choco {
			log.Error("Choco not found")
		}
		if choco && gitWin && scoop {
			log.Info("Done! All tools installed")
			return
		}

		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Scoop: %t \n", scoop)
		fmt.Printf("Git: %t \n", gitWin)
		fmt.Printf("Choco: %t \n", choco)
		log.Info("For install this run the <spider health -i>")
	case "linux":
		if !gitLinux {
			log.Error("Git not found")
		}
		if !snap {
			log.Error("Snap not found")
		}
		if gitLinux && snap {
			log.Info("Done! All tools installed")
			return

		}
		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Git: %t \n", gitLinux)
		fmt.Printf("Snap: %t \n", snap)
		log.Info("For install this run the <spider health -i>")
	case "darwin":
		if !gitMacOS {
			log.Error("Git not found")
		}
		if !brew {
			log.Error("Brew not found")
		}
		if gitMacOS && brew {
			log.Info("Done! All tools installed")
			return

		}
		fmt.Println("<< --- TOOLS INSTALLED: --- >>")
		fmt.Printf("Git: %t \n", gitMacOS)
		fmt.Printf("Brew: %t \n", brew)
		log.Info("For install this run the <spider health -i>")

	default:
		log.Fatal("Platform not supported")
	}
}

func HealthInstall() {
	os := runtime.GOOS
	switch os {
	case "windows":
		if !scoop {
			log.Info("<< --- INSTALL SCOOP --- >>")
			fmt.Print("1. Open a powershell window\n2. Run this command Set-ExecutionPolicy RemoteSigned -scope CurrentUser\n3. Install scoop whio this command iwr -useb get.scoop.sh | iex ")
			fmt.Println("Done!")
		}

		if !gitWin {
			log.Info("<< --- INSTALL GIT --- >>")
			fmt.Print("1. Close the other powershell window and open other\n2. Run this command scoop install git")
			fmt.Println("Done!")
		}

		if !choco {
			log.Info("<< --- INSTALL CHOCO --- >>")
			fmt.Print("1. Open a powershell as administrator\n2. Run this command")
			fmt.Print("Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))")
			fmt.Println("Done!")
		}

		log.Info(`Nothing to install ¯\_(ツ)_/¯`)

	case "darwin":
		if !brew {
			log.Info("<< --- INSTALL BREW --- >>")
			fmt.Print("1. Open a terminal\n2. Run this command")
			fmt.Print(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)
			fmt.Println("Done!")
		}
		if !gitMacOS {
			log.Info("<< --- INSTALL GIT --- >>")
			fmt.Print("1. Open a terminal\n2. Run this command brew install git")
			fmt.Println("Done!")
		}
		log.Info(`Nothing to install ¯\_(ツ)_/¯`)

	case "linux":
		if !snap {
			log.Info("<< --- INSTALL SNAP --- >>")
			fmt.Print("1.Open a terminal\n2. Run this command")
			fmt.Print("UBUNTU AND DEBIAN: sudo apt update && sudo apt install snapd\nFEDORA: sudo dnf install snapd && sudo ln -s /var/lib/snapd/snap /snap\nARCH LINUX SUPPORT: https://snapcraft.io/docs/installing-snap-on-arch-linux Open this guide :p")
			fmt.Print("Done!")
		}

		if !gitLinux {
			log.Info("<< --- INSTALL GIT --- >>")
			fmt.Print("1.Open a terminal\n2.Run this command")
			fmt.Print("UBUNTU AND DEBIAN: sudo apt install git\nFEDORA: sudo dnf install git\nARCH: sudo pacman -S git")
		}
		log.Info(`Nothing to install ¯\_(ツ)_/¯`)

	default:
		log.Fatal("Platform not supported")

	}
}
