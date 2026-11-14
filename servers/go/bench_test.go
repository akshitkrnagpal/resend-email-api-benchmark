package main

import (
	"os"
	"testing"
)

func benchPayload(b *testing.B, file string) {
	body, err := os.ReadFile("../../bench/payloads/" + file)
	if err != nil {
		b.Fatal(err)
	}
	b.SetBytes(int64(len(body)))
	b.ReportAllocs()
	for b.Loop() {
		r, err := parseSingle(body)
		if err != nil {
			b.Fatal(err)
		}
		e, err := normalizeEmail(r)
		if err != nil {
			b.Fatal(err)
		}
		_ = buildEml(e)
	}
}

func BenchmarkLarge(b *testing.B) { benchPayload(b, "large.json") }
func BenchmarkSmall(b *testing.B) { benchPayload(b, "small.json") }
