# Computer Networks — Quick Reference (Beginner Style)

*Same content as the crisp Quick Reference — just explained the simple way, with diagrams and "Think:" lines. Use this as a fast revision pass after the full Beginner Friendly Guide.*

---

# 1. Network Basics

A network is just devices talking to each other using shared rules called **protocols**.

```text
Node = any device on the network (laptop, phone, printer, router...)
Packet = data broken into small pieces to travel the network
```

Devices, from dumbest to smartest:

```text
Hub    → shouts data to everyone
Switch → sends data only to the right device (uses MAC)
Router → connects different networks (uses IP)
```

Network sizes, small to big:

```text
PAN (Bluetooth) < LAN (building) < MAN (city) < WAN (country/globe)
```

Think:

> **Client-Server = one boss, many askers. Peer-to-Peer = everyone is equal.**

Other terms:

```text
Intranet = private org-only network
Extranet = intranet opened to a few outsiders
VPN      = encrypted tunnel over the public internet
```

---

# 2. OSI Model (7 Layers)

The OSI model is a teaching tool — it explains networking as 7 stacked jobs.

```text
7. Application   → user-facing stuff (HTTP, FTP, DNS)
6. Presentation  → format/encrypt/compress (TLS, JPEG)
5. Session       → manage the conversation (logins, RPC)
4. Transport     → end-to-end delivery (TCP, UDP)
3. Network       → routing across networks (IP, routers)
2. Data Link     → node-to-node delivery (Ethernet, switches, MAC)
1. Physical      → raw bits as signals (cables, radio)
```

Think:

> **"Please Do Not Throw Sausage Pizza Away"** — bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, Application.

In real life, nobody implements all 7 separately — that's what the next model is for.

---

# 3. TCP/IP Model (the real-world 4 layers)

```text
Application → HTTP, DNS, FTP, SMTP (what your code touches)
Transport   → TCP (reliable) or UDP (fast) — uses ports
Internet    → IP (addressing + routing), ARP, ICMP
Link        → Ethernet/Wi-Fi + MAC (local delivery)
```

Think:

> **OSI = theory (7 layers). TCP/IP = practice (4 layers).**

Common ports to just know:

```text
HTTP → 80     HTTPS → 443    FTP  → 21
SSH  → 22     SMTP  → 25     DNS  → 53
POP3 → 110    IMAP  → 143
```

---

# 4. Physical Layer

This is the layer that actually pushes bits onto a wire, fiber, or radio wave.

```text
Bandwidth  = how much data a channel can carry (capacity)
Baud rate  = how many signal changes happen per second
```

Cables, weakest to strongest:

```text
Twisted pair (cheap, LANs) → Coaxial (older broadband) → Fiber (fastest, uses light)
```

Two problems signals face:

```text
Attenuation = signal gets weaker over distance
Crosstalk   = signal leaks/interferes with a nearby wire
```

Sharing one wire between multiple signals is called **multiplexing**:

```text
FDM = split by frequency (like separate radio stations)
TDM = split by time slots (everyone gets a turn)
```

Think:

> **Physical layer = how bits physically travel, nothing smarter than that.**

---

# 5. Data Link Layer

This layer's whole job: get data reliably from one device to the *next* device (not the final destination — just one hop).

```text
MAC sublayer → controls who gets to use the wire, uses MAC address
LLC sublayer → hands data up to the Network layer
```

Before sending, data gets wrapped with markers — this is called **framing**:

```text
[ start marker | data | error-check | end marker ]
```

To catch errors, it uses:

```text
Parity bit → simplest
Checksum   → simple sum-based check
CRC        → strongest, uses polynomial division
```

To avoid overwhelming the receiver, it uses **flow control**:

```text
Stop-and-Wait  → send 1 frame, wait for ACK, repeat (slow)
Sliding Window → send several frames before waiting (fast)
```

To share the wire without everyone talking at once:

```text
CSMA/CD (Ethernet) → listen, and if a collision happens, stop + retry
CSMA/CA (Wi-Fi)     → listen first, try to avoid collisions before they happen
```

Think:

> **Data Link = local delivery + making sure the frame arrived undamaged.**

---

# 6. Network Layer

This layer's job: get data from your device all the way to the *final destination*, possibly through many networks.

```text
IPv4 → 32-bit address, e.g. 192.168.1.1
IPv6 → 128-bit address, much bigger space
```

**Subnetting** = chopping a big network into smaller ones:

```text
192.168.1.0/24
        ↑
   /24 = 24 bits for network, 8 bits left for hosts
   2^8 - 2 = 254 usable addresses
```

**NAT** lets many private devices share one public IP:

```text
Laptop (192.168.1.10) ┐
Phone  (192.168.1.11) ├─ Router ─ One Public IP ─ Internet
TV     (192.168.1.12) ┘
```

**TTL** = a hop counter that stops packets looping forever.

**Fragmentation** = big packets get chopped to fit the network's max size (MTU), then reassembled at the destination.

Routing = the router deciding *where to send a packet next*. Three routing styles:

```text
Distance-vector (RIP)  → "just count the hops" — simple, slower to update
Link-state (OSPF)      → "I have the whole map" — faster, finds shortest path
Path-vector (BGP)      → used between different companies/ISPs on the internet
```

Think:

> **Network layer = routing. "Which network is this going to, and how do I get there?"**

---

# 7. Key Formulas (just the ones worth remembering)

```text
Transmission time         = Data size / Bandwidth
Propagation delay         = Distance / Signal speed
Bandwidth-Delay Product   = Bandwidth × RTT   (data "in flight")
Shannon Capacity          = Bandwidth × log2(1 + SNR)
Subnet hosts              = 2^(host bits) - 2
Number of subnets         = 2^(borrowed bits)
Stop-and-Wait efficiency  = Tx time / (Tx time + RTT)
Sliding window efficiency = (Window × Tx time) / (RTT + Tx time)
```

Think:

> **You don't need to "feel" these — just plug in numbers when a question gives them.**

---

# 8. Transport & Session Layer

**TCP** = reliable, ordered, connection-based.

```text
Client                  Server

   SYN  ───────────────→
        ←──────── SYN-ACK
   ACK  ───────────────→

Connection established — now data can flow
```

**UDP** = no handshake, no guarantees, just "here's the data, go."

```text
Used for: DNS queries, video streaming, gaming, VoIP
```

**Ports** (0–65535) tell the device *which app* the data is for:

```text
192.168.1.10 : 443
     ↑           ↑
  which device   which app
```

**Session layer** manages the ongoing conversation between two apps:

```text
Establish session → keep it alive → terminate session
```

It also handles:

```text
Dialog control  → who talks when (half-duplex / full-duplex)
Checkpointing   → save progress so you can resume after a failure
Token mgmt      → avoid two users clashing at once
```

Think:

> **Transport = TCP/UDP + ports. Session = managing the ongoing conversation on top of that connection.**

---

# 9. Application Layer

This is the layer your code actually talks to.

```text
HTTP  (80)   → normal web traffic
HTTPS (443)  → web traffic + TLS encryption
FTP   (21)   → file transfer
SFTP         → encrypted file transfer
TFTP         → simple, UDP-based file transfer
SMTP  (25)   → sending email
POP3  (110)  → download email, then delete from server
IMAP  (143)  → keep email synced on the server
DNS   (53)   → domain name → IP address
SSH   (22)   → secure remote login
Telnet (23)  → remote login, NOT encrypted (avoid)
DHCP         → auto-assigns IP addresses to devices
SNMP         → monitors network devices
NTP          → syncs clocks across devices
SIP / RTP    → VoIP call setup / real-time media streaming
```

Think:

> **If it has a name you recognize from browsing/email/file-sharing, it lives here.**

---

# 10. Advanced Topics (just enough to recognize the term)

```text
IPv6 anycast   → deliver to the *nearest* of several possible destinations
MPLS           → forwards packets using labels instead of full IP lookups (faster)
SD-WAN         → software manages/optimizes traffic across multiple WAN links
QoS            → prioritizes some traffic (like video calls) over others
Wi-Fi (802.11) → uses CSMA/CA; WPA2 (AES) is the modern secure standard
IPSec          → encrypts at the network layer (used in VPNs)
SSL VPN        → encrypts at the application layer (via HTTPS)
Zero-trust     → "trust nobody by default, always verify"
SDN            → separates the "decision-making" from the "packet-forwarding" in a network
CoAP / MQTT    → lightweight protocols for IoT devices
DNSSEC         → adds signatures to DNS so it can't be spoofed
```

Think:

> **You don't need depth here — just recognize the word and its one-line purpose.**

---

## One-Page Mental Model

```text
                 YOUR APPLICATION
                       ↓
                  HTTP / DNS
                       ↓
                      TCP
                       ↓
                       IP
                       ↓
                MAC / Ethernet
                       ↓
               Physical Signals
```

Every API/website call = **DNS lookup → TCP handshake → (TLS if HTTPS) → HTTP request/response**, riding on top of this stack.

---

*This is the fast revision version. For the full explanations, analogies, and step-by-step walkthroughs, go back to the "Beginner Friendly Guide."*