package parser

import (
	"fmt"
	"reflect"

	"github.com/spf13/viper"
)

func GetData() {
	StartReadViper()
	data := viper.GetViper().Get("scoop")
	switch reflect.TypeOf(data).Kind() {
	case reflect.Slice:
		s := reflect.ValueOf(data)
		fmt.Print(len(s))
	}
}
