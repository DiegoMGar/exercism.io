package twofer

import "fmt"

func ShareWith(name string) string {
	if len(name) < 1 {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
