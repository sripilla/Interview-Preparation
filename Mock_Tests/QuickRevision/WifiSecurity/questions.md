# WPA3 Security Scenarios — Questions Only

> A focused 8-question set on WPA3 Wi-Fi security misconfigurations and risks. Question 8 was cut off in the source screenshot (only 2 of 4 options captured, no answer/explanation) — flagged in the Answer Key.

---

**1. WPA3 Misconfiguration**

A developer configures an enterprise Wi-Fi network:
```
Config SAE = Y
Config SUITEB = Y
Configure SUITEB192 = N
```
Which configuration line is potentially weakening the network security?

A) Config SAE = Y  
B) Config SUITEB = Y  
C) Configure SUITEB192 = N  
D) All configurations are secure  

---

**2. WPA3 Personal vs Enterprise**

A developer accidentally configures WPA3-Personal instead of WPA3-Enterprise for government devices. Which risk arises?

A) Stronger mutual authentication  
B) Lack of 802.1X authentication  
C) Enforced 192-bit encryption  
D) Protected management frames enabled  

---

**3. TKIP Usage**

An IT engineer enables TKIP on a WPA3 network for backward compatibility. What is the impact?

A) Enhances AES encryption  
B) Reduces security by using outdated encryption  
C) Improves 192-bit security compliance  
D) No effect on WPA3  

---

**4. Open Wi-Fi Misstep**

An enterprise Wi-Fi is accidentally configured as open but with WPA3 SAE enabled. What is the risk?

A) Strong encryption is maintained  
B) Open networks allow unauthorized access  
C) SAE automatically fixes open configuration  
D) No risk because SAE is enabled  

---

**5. Weak Password Policy**

A WPA3 network uses SAE but allows weak passwords for authentication. Which risk is present?

A) SAE mitigates all password issues  
B) Weak passwords can be brute-forced  
C) Encryption strength increases automatically  
D) SUITEB192 becomes optional  

---

**6. Management Frame Protection Disabled**

The administrator disables protected management frames (PMF) on a WPA3 network. What risk arises?

A) Reduced AES encryption  
B) Vulnerability to deauthentication attacks  
C) Strong SAE handshake enforced  
D) No effect  

---

**7. SUITEB192 Misuse**

A developer sets `Configure SUITEB192 = N` on a network handling classified information. What is the consequence?

A) Strong 192-bit encryption remains active  
B) Compliance with high-security standards is broken  
C) SAE handshake is strengthened  
D) Network speed increases  

---

**8. WPA3 Downgrade Risk**

An admin enables WPA3 but allows fallback to WPA2 for older devices. What is the risk?

A) No risk; backward compatibility is safe  
B) Attackers can force WPA2 downgrade and exploit weaker encryption  
C) *(not captured in source)*  
D) *(not captured in source)*  

---