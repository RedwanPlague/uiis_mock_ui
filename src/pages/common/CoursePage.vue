<template>
  <q-page padding>
    <div class="q-ma-md">
      <div class="text-h4">{{name}}</div>
      <div style="font-size: 1.5em">Credit: {{credit.toFixed(2)}}</div>
      <br/>
      <div style="font-size: 1.2em">Intended for {{levelTerm}}</div>
      <div style="font-size: 1.2em">Prerequisites: None</div>
      <div class="q-mt-md text-bold q-mb-none" style="font-size: 1.3em">Details</div>
      <p style="font-size: 1.1em">
        {{description}}
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CoursePage',
  data () {
    return {
      name: 'CSE321: Computer Networks',
      credit: 3.00,
      levelTerm: 'Level-3, Term-II',
      description: 'Protocol hierarchies; Data link control: HLDC; DLL in Internet; DLL of ATM; LAN Protocols: Standards IEEE 802.*; Hubs, Bridges, and Switches, FDDI, Fast Ethernet; Routing algorithm; Congestion control; Internetworking, WAN; Fragmentation; Firewalls; IPV4, IPV6, ARP, RARP, Mobile IP, Network layer of ATM; Transport protocols; Transmission control protocol: connection management, transmission policy, congestion control, timer management; UDP; AAL of ATM; Network security: Cryptography, DES, IDEA, public key algorithm; Authentication; Digital signatures; Gigabit Ethernet; Domain Name System: Name servers; Email and its privacy; SNMP; HTTP; World Wide Web.'
    }
  }
}
</script>
