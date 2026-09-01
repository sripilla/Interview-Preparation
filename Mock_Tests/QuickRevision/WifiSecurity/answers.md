# WPA3 Security Scenarios — Answer Key

---

**1. WPA3 Misconfiguration — Answer: C) Configure SUITEB192 = N**
SUITEB192 provides 192-bit encryption required for high-security environments; disabling it weakens security.

**2. WPA3 Personal vs Enterprise — Answer: B) Lack of 802.1X authentication**
WPA3-Enterprise provides enterprise-grade authentication via 802.1X, unlike WPA3-Personal.

**3. TKIP Usage — Answer: B) Reduces security by using outdated encryption**
TKIP is deprecated and does not meet WPA3 enterprise security standards.

**4. Open Wi-Fi Misstep — Answer: B) Open networks allow unauthorized access**
WPA3 cannot fully secure an open SSID; authentication must be enforced.

**5. Weak Password Policy — Answer: B) Weak passwords can be brute-forced**
SAE protects the handshake but cannot prevent attacks if weak passwords are used.

**6. Management Frame Protection Disabled — Answer: B) Vulnerability to deauthentication attacks**
PMF protects Wi-Fi management frames from spoofing and DoS attacks.

**7. SUITEB192 Misuse — Answer: B) Compliance with high-security standards is broken**
SUITEB192 is mandatory for sensitive data; disabling it weakens security compliance.

**8. WPA3 Downgrade Risk — Answer: B) Attackers can force WPA2 downgrade and exploit weaker encryption** *(derived — source cut off)*

⚠️ **Note:** This question's source screenshot was cut off — only options A and B were captured, with no options C/D, no marked answer, and no explanation visible. Based on the pattern of every other question in this set (each one identifies the "risky/weakened" choice as the correct answer), **B is almost certainly the intended correct answer** here too, and it's also the objectively correct security answer regardless: allowing WPA2 fallback on a WPA3 network creates exactly this downgrade-attack risk — an attacker can spoof/jam to force a WPA3-capable client to negotiate down to WPA2, then exploit WPA2's weaker 4-way handshake (susceptible to attacks like KRACK) instead of WPA3's more robust SAE handshake. This is a well-documented real-world WPA3 transition-mode vulnerability.

**Explanation:** Enabling a "transition mode" that permits both WPA3 and WPA2 clients on the same network reintroduces WPA2's weaknesses — a downgrade attack tricks a client into connecting via the weaker WPA2 protocol even though WPA3 is available, defeating the purpose of upgrading to WPA3 in the first place. Best practice is to run WPA3-only where possible, or isolate legacy WPA2 devices on a separate SSID rather than relying on mixed-mode fallback.

---

## Quick Reference Table

| # | Topic | Answer |
|---|---|---|
| 1 | WPA3 Misconfiguration | C) Configure SUITEB192 = N |
| 2 | WPA3 Personal vs Enterprise | B) Lack of 802.1X authentication |
| 3 | TKIP Usage | B) Reduces security by using outdated encryption |
| 4 | Open Wi-Fi Misstep | B) Open networks allow unauthorized access |
| 5 | Weak Password Policy | B) Weak passwords can be brute-forced |
| 6 | Management Frame Protection Disabled | B) Vulnerability to deauthentication attacks |
| 7 | SUITEB192 Misuse | B) Compliance with high-security standards is broken |
| 8 | WPA3 Downgrade Risk | B) Attackers can force WPA2 downgrade ⚠️ (derived) |

**Pattern note:** Every single question in this set has **B** as the correct answer (Q1 is the exception at C). Worth being aware of this pattern, but don't rely on "always pick B" as an exam strategy — it's likely coincidental to which questions were selected for this particular capture, not a property of the underlying question bank.