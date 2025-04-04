"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2776],{709:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/TEE-keystone-vs-x86-f29d0c9688224df0408d314dd155a152.svg"},1436:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/keystone-components-40b1798d042edeb4821dbd8bc681d037.png"},1905:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/runtime-87a3226d8a9e902dc6ce2f2dd98efe62.svg"},2735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var s=n(6924),i=n(4848),r=n(8453);const a={slug:"keystone-enclave",title:"Keystone Enclave",authors:"luca",tags:["trusted-computing"]},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Trusted Execution Environment",id:"trusted-execution-environment",level:2},{value:"Customizable Trusted Execution Environment",id:"customizable-trusted-execution-environment",level:3},{value:"RISC-V Background",id:"risc-v-background",level:2},{value:"RISC-V Privilieged ISA",id:"risc-v-privilieged-isa",level:3},{value:"Physical Memory Protection",id:"physical-memory-protection",level:3},{value:"Keystone components",id:"keystone-components",level:2},{value:"Trusted Hardware",id:"trusted-hardware",level:4},{value:"Security Monitor",id:"security-monitor",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Enclave",id:"enclave",level:3},{value:"Edge Calls",id:"edge-calls",level:3},{value:"Edge Calls Lifecycle",id:"edge-calls-lifecycle",level:4},{value:"Memory isolation using RISC-V PMP",id:"memory-isolation-using-risc-v-pmp",level:2},{value:"Keystone key-hierarchy",id:"keystone-key-hierarchy",level:2},{value:"Sealing-Key Derivation",id:"sealing-key-derivation",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",annotation:"annotation",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This post outlines the functionalities of the ",(0,i.jsx)(t.a,{href:"https://keystone-enclave.org/",children:"Keystone Enclave"})," framework, extracted from my master's thesis ",(0,i.jsx)(t.em,{children:"(updated to December 2022)"}),". Keystone is an open-source framework designed for building Trusted Execution Environments, adaptable for various platforms that are based on RISC-V hardware."]}),"\n",(0,i.jsx)(t.h2,{id:"trusted-execution-environment",children:"Trusted Execution Environment"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.strong,{children:"Trusted Execution Environment (TEE)"})," is an execution environment that runs alongside but is isolated from the device's main operating system.\nIt ensures that the ",(0,i.jsx)(t.em,{children:"confidentiality"})," and ",(0,i.jsx)(t.em,{children:"integrity"})," of the code and data loaded in the TEE are preserved.\nTrusted applications running on TEE have access to the full capabilities of a device's main processor and memory, while hardware isolation shields these components from user-installed apps running in the main operating system. The various included trusted applications are protected from one another by software and cryptographic isolations within the TEE.",(0,i.jsx)(t.br,{}),"\n","The two most common TEE implementations at the moment are ARM TrustZone and Intel SGX. All these TEEs make design decisions based on either the target applications or threat models and these choices are fixed since they are strictly hardware related. They were not designed to have flexibility or extensibility for enclave developers. If the hardware changes or has a new feature, the enclave developer has to redesign the TEE.\nAll TEE platforms aim to reduce the enclave's trusted computing base, and they have managed to achieve different degrees of success. The ",(0,i.jsx)(t.a,{href:"https://apps.dtic.mil/sti/pdfs/ADA108831.pdf",children:"Trusted Computing Base (TCB)"})," is a section of the system, which could include hardware, firmware and software. It is responsible for enforcing the security policy of the system. Additionally, closed-source hardware and microcode implementations make it impossible for a third party to evaluate the security of TEEs."]}),"\n",(0,i.jsx)(t.h3,{id:"customizable-trusted-execution-environment",children:"Customizable Trusted Execution Environment"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://keystone-enclave.org/2019/07/22/Keystone-Paper.html",children:"Customizable TEE"})," is the solution to closed-source hardware-implemented TEEs problems. It has been designed to be flexible, and configurable and to have a small TCB. It has been designed with clear abstractions and a modular programming model which simplifies for others to extend and add features to the TEE. An example of a customizable TEE is Keystone. Three logical actors, such as the manufacturer (who makes the hardware), the platform provider (runs the hardware, such as a cloud provider), and the enclave developer (who writes software that runs in the enclaves), were identified by Keystone developers as being a part of the customizable TEE ecosystem. In a customizable TEE, as opposed to a standard TEE, decisions made by all 3 actors together determine the security guarantees offered and the functionalities enabled.",(0,i.jsx)(t.br,{}),"\n","Keystone offers security primitives that can be joined together via the software framework rather than creating a single instance of TEE hardware. The TEE can be modified by the creator of the enclave and the platform provider to suit their threat models or platform configurations. The Keystone project offers a general and formally proven interface for a variety of devices to create an open standard for TEEs."]}),"\n",(0,i.jsx)(t.h2,{id:"risc-v-background",children:"RISC-V Background"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://riscv.org/technical/specifications/",children:"RISC-V"})," is open-source, which provides Keystone with several benefits. The most noticeable is that anyone can see how it works, understand the threat model it can operate under, and verify how exploits/patches function.",(0,i.jsx)(t.br,{}),"\n","Other advantages of RISC-V are security-oriented primitives, which provide efficient isolation, the most notable being ",(0,i.jsx)(t.a,{href:"https://sifive.github.io/freedom-metal-docs/devguide/pmps.html",children:"Physical Memory Protection (PMP)"}),". RISC-V is an evolving and community-driven Instruction Set Architecture (ISA). Keystone has been designed and developed using RISC-V standard security features. Moreover, the ever-growing world of RISC-V gives Keystone a wide variety of potential platforms and different deployment scenarios to which it can adapt to."]}),"\n",(0,i.jsx)(t.h3,{id:"risc-v-privilieged-isa",children:"RISC-V Privilieged ISA"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://riscv.org/technical/specifications/",children:"RISC-V"})," has three software privilege levels (in increasing order of capability): user mode (U-mode), supervisor mode (S-mode), and machine mode (M-mode). Only one of the privilege modes can be active on the processor at once.",(0,i.jsx)(t.br,{}),"\n","The active privilege level determines what the software can do while it is running. These are typical applications for each level of privilege:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"U-mode"}),": user processes"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"S-mode"}),": kernel (including kernel modules and device drivers) or hypervisor"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"M-mode"}),": bootloader and firmware."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When the processor is in the highest privilege mode, M-mode, it is in control of all physical resources and interrupts. As with microcode in Complex Instruction Set Computer (CISC) ISAs (such as x86), M-mode is not interruptible and not affected by the interference of lower modes. M-mode is used in Keystone for executing the TCB of the system, the ",(0,i.jsx)(t.em,{children:"security monitor"})," (SM)."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"keystone-vs-x86",src:n(709).A+"",width:"701",height:"621"})," ",(0,i.jsx)(t.em,{children:"Architecture differences between x86 and Keystone"})]}),"\n",(0,i.jsx)(t.p,{children:"The following are some advantages of utilizing an M-mode software as the TCB:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"programmability: unlike microcode for x86, in RISC-V M-mode software can be written using pre-existing toolchains and programming languages, such as C"}),"\n",(0,i.jsx)(t.li,{children:"agile patching: since the TCB is purely software, bugs or vulnerabilities can be patched without updates, which are specific to a particular hardware"}),"\n",(0,i.jsx)(t.li,{children:"verifiability: compared to hardware, the software is generally simpler to be formally verified."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"physical-memory-protection",children:"Physical Memory Protection"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://sifive.github.io/freedom-metal-docs/devguide/pmps.html",children:"Physical Memory Protection (PMP)"})," is a strong standard primitive that enables M-mode to control the access to physical memory from lower privileges modes. Keystone requires PMP to implement memory isolation of enclaves.\nOnly software in M-mode can configure the PMP, which is controlled by a series of control and status registers (CSR) that limit physical memory access to the U-mode and S-mode. Depending on the platform design, PMP entries number can change."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"pmp-img",src:n(9055).A+"",width:"521",height:"401"})," ",(0,i.jsx)(t.em,{children:"Image representing PMP registers"})]}),"\n",(0,i.jsx)(t.p,{children:"Since PMP exclusively works on physical addresses, S-mode can continue to support virtual addresses without affecting the security of the system. Even though each processor may implement PMP differently in hardware, the basic guarantees are part of the standard. PMP is used by Keystone Security Monitor to create memory isolation."}),"\n",(0,i.jsx)(t.h2,{id:"keystone-components",children:"Keystone components"}),"\n",(0,i.jsx)(t.p,{children:"A Keystone-capable system is made up of different modules operating in various privilege modes as shown in the figure below:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"keystoneComponents",src:n(1436).A+"",width:"1599",height:"746"})," ",(0,i.jsx)(t.em,{children:"Keystone system with host processes, untrusted OS, security monitor, and multiple enclaves (each with runtime and eapp)"})]}),"\n",(0,i.jsx)(t.h4,{id:"trusted-hardware",children:"Trusted Hardware"}),"\n",(0,i.jsx)(t.p,{children:"Trusted Hardware is a CPU package built by an honest manufacturer that must enclose standard RISC-V cores, which are Keystone compatible, and a root of trust. Optional features of the hardware could also include memory encryption, cache partitioning, a cryptographically safe source of randomness, etc. Platform-specific plug-ins are needed by the Security Monitor to support optional features."}),"\n",(0,i.jsx)(t.h3,{id:"security-monitor",children:"Security Monitor"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Security Monitor (SM)"})," is a trusted software that runs in M-mode and works as the small TCB in the Keystone system. Before the SM can be considered trusted, it must be verified by the hardware root of trust. Then, the root of trust ",(0,i.jsx)(t.em,{children:"measures"})," the SM, generates a keypair for remote attestation, signs the public key, and eventually can continue booting. The measurement of the SM consists in computing the hash of the SM firmware image. The SM manages isolation boundaries between the enclaves and the untrusted OS, therefore it implements the majority of Keystone's security guarantees.  It serves as an interface for managing the enclave's lifecycle and utilising platform-specific features. The OS and enclaves may call SM functions using the Supervisor Binary Interface (SBI). Specifically, the SM provides the following functionality:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"memory isolation"})," using RISC-V PMP"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"remote attestation"})," (signatures and measurement): the goal is to demonstrate to a remote client that the enclave contains the expected application, and is running on trusted hardware"]}),"\n",(0,i.jsx)(t.li,{children:"and other features, such as system PMP synchronization, enclave thread management and side-channel defences"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsxs)(t.p,{children:["Keystone developers implemented the ",(0,i.jsx)(t.strong,{children:"Runtime (RT)"})," with the goal of minimal and flexible TCB. It is an S-mode software. As a result, enclave applications can use modular system-level abstraction (e.g., virtual memory management). It provides kernel-like functionality, such as system calls, trap handling, virtual memory management and so on. Although the RT functions similarly to a kernel inside an enclave, most kernel functionalities are not necessary for the enclave application. To allow enclave developers to include only the necessary functionality and minimize the TCB, Keystone developers created an example of RT called Eyrie. It enables reusability since it is compatible with multiple-user programs. And by adding RT modules, they expand RT functionality without changing user applications or without complicating the SM."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"runtime-example",src:n(1905).A+"",width:"981",height:"321"})," ",(0,i.jsx)(t.em,{children:"Example of runtime reusability on the left and its functionalities on the right"})]}),"\n",(0,i.jsx)(t.h3,{id:"enclave",children:"Enclave"}),"\n",(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.strong,{children:"Enclave"})," is an environment isolated from the untrusted OS and other enclaves. Each enclave is provided with a private physical memory region which is accessible by only the enclave and SM. Each enclave consists of a user-level enclave application called ",(0,i.jsx)(t.em,{children:"eapp"})," and a supervisor-level runtime. An eapp is a user-level application that executes in the enclave. A developer can create a custom eapp from scratch, or just execute an existing RISC-V binary in Keystone. The enclave lifecycle is shown below."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"enclave-lifecycle",src:n(7832).A+"",width:"960",height:"720"})," ",(0,i.jsx)(t.em,{children:"Enclave Lifecycle from Keystone docs"})]}),"\n",(0,i.jsx)(t.p,{children:"The main phases are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"creation"}),": when an enclave is started it has a contiguous range of physical memory that is called Enclave Private Memory (EPM). In the beginning, the EPM is allocated by the untrusted host, which initialises it with the enclave's page table, the runtime and the enclave application. When the untrusted host calls the SM to create an enclave, the SM isolates and secures the EPM using a PMP entry, and then the PMP status is propagated throughout all of the system's cores. Subsequently, before the enclave execution, the enclave's initial state is measured and verified by the SM."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"execution"}),": the SM enters the enclave on one of the cores as soon as the untrusted asks for it. The PMP permission is enabled to the core by the SM, and the core starts running the eapp. The RT can exit or re-enter the enclave at any time depending on the execution flow of the eapp. The PMP permissions are switched to keep the isolation each time a core exits or enters the enclave."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"destruction"}),": the untrusted host may want to destroy the enclave at any moment, when it happens, the EPM is cleared by the SM and the PMP entry is freed. The untrusted host then definitely reclaims the released memory."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"edge-calls",children:"Edge Calls"}),"\n",(0,i.jsxs)(t.p,{children:["Function calls that enter or exit the enclave are known as ",(0,i.jsx)(t.em,{children:"edge calls"})," in Keystone, as in other enclave systems. For instance, if an enclave wants to send a network packet, it must use an edge call to deliver the data to an untrusted host process. The current version of Keystone allows ",(0,i.jsx)(t.em,{children:"enclave"})," ",(0,i.jsxs)(t.span,{className:"katex",children:[(0,i.jsx)(t.span,{className:"katex-mathml",children:(0,i.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(t.semantics,{children:[(0,i.jsx)(t.mrow,{children:(0,i.jsx)(t.mo,{children:"\u2192"})}),(0,i.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,i.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(t.span,{className:"base",children:[(0,i.jsx)(t.span,{className:"strut",style:{height:"0.3669em"}}),(0,i.jsx)(t.span,{className:"mrel",children:"\u2192"})]})})]})," ",(0,i.jsx)(t.em,{children:"untrusted host"})," calls, also known internally as ",(0,i.jsx)(t.em,{children:"ocalls"})," (outbound calls, names under discussion). In the current version of Keystone, all ocall wrapping code uses shared memory regions to transfer data. When referencing data in these regions virtual address pointers are never used, instead, only offsets into the region are used."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"ocall-lifecycle",src:n(5689).A+"",width:"1069",height:"573"})," ",(0,i.jsx)(t.em,{children:"Simplified example of an ocall lifecycle"})]}),"\n",(0,i.jsx)(t.h4,{id:"edge-calls-lifecycle",children:"Edge Calls Lifecycle"}),"\n",(0,i.jsxs)(t.p,{children:["Consider for example a generic ",(0,i.jsx)(t.code,{children:"ocall_do_something"}),", as represented in Fig. [ocall-lifecycle]. This call transfers some values passed as arguments from the enclave to be processed by the host process (it could be a value to be printed, a file to be stored and so on). The enclave application calls ",(0,i.jsx)(t.code,{children:"ocall_do_something(...)"}),", which is an edge wrapper function.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"ocall_do_something(...)"})," uses the system-call-like interface to the runtime to execute an ",(0,i.jsx)(t.em,{children:"ocalls"})," similar to ",(0,i.jsx)(t.code,{children:"ocall(OCALL_DO_SOMETHING, &input, sizeof(input), &ouput,  sizeof(output))"}),". The enclave passes a pointer to the value, the size of the argument and any necessary return buffer information.\nAfter allocating an ",(0,i.jsx)(t.code,{children:"edge_call"})," structure in the shared memory region, the runtime fills out the call type, copies the value into another part of the shared memory, and sets up the offset to the argument value. Note that, in Keystone, edge calls employ offset values in the shared memory area, rather than pointers.\nThe runtime subsequently exits the enclave with an ",(0,i.jsx)(t.code,{children:"SBI_CALL"}),", i.e. ",(0,i.jsx)(t.code,{children:"sbi_stop_enclave()"}),", passing a value indicating that the enclave is executing an ",(0,i.jsx)(t.em,{children:"ocalls"})," rather than shutting down."]}),"\n",(0,i.jsxs)(t.p,{children:["After resuming execution of the Keystone kernel driver, it checks the enclave's exit status, notes a pending ",(0,i.jsx)(t.em,{children:"ocalls"})," and handles control to the userspace host process.\nThe registered ",(0,i.jsx)(t.em,{children:"ocalls"})," handler wrapper for ",(0,i.jsx)(t.code,{children:"OCALL_DO_SOMETHING"})," is dispatched by the userspace host process, which also consumes the edge call. The wrapper generates a pointer to the argument value from the offset in the shared memory region and then calls ",(0,i.jsx)(t.code,{children:"do_something"})," with the value as an argument. The host wrapper determines whether any return values must be copied into the shared memory region upon return and returns the control to the driver after setting the edge call return status to ",(0,i.jsx)(t.code,{children:"SUCCESS"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Through an ",(0,i.jsx)(t.code,{children:"SBI_CALL"}),", the driver rejoins the enclave runtime. The enclave ",(0,i.jsx)(t.em,{children:"ocalls"})," wrapper code is resumed once the runtime determines whether any return information has to be copied from the shared region into return buffers. Finally, the enclave function that has called at the beginning ",(0,i.jsx)(t.code,{children:"ocall_do_something"})," receives any return values from the ",(0,i.jsx)(t.em,{children:"ocalls"})," wrapper code."]}),"\n",(0,i.jsx)(t.h2,{id:"memory-isolation-using-risc-v-pmp",children:"Memory isolation using RISC-V PMP"}),"\n",(0,i.jsxs)(t.p,{children:["In Keystone, developers refer to the memory section that an enclave uses as a ",(0,i.jsx)(t.em,{children:"region"})," and each region is defined by a PMP entry. The SM employs two PMP registers for internal purposes (i.e. security monitor memory and untrusted memory). One active enclave may use one of the remaining PMP entries each. RISC-V PMP has several properties, the most relevant are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["prioritization by index: the index of PMP entries statically determines the priority. Indices go from ",(0,i.jsx)(t.code,{children:"0"})," to ",(0,i.jsx)(t.code,{children:"N"}),", where ",(0,i.jsx)(t.code,{children:"N"})," depends upon the platform. ",(0,i.jsx)(t.code,{children:"0"})," is the highest priority, whereas ",(0,i.jsx)(t.code,{children:"N"})," is the lowest"]}),"\n",(0,i.jsx)(t.li,{children:"default denies: if no PMP entry matches with an address, the memory access will be rejected by default."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For simplicity, in the following explanation PMP entries are denoted as ",(0,i.jsx)(t.code,{children:"pmp[i]"})," where ",(0,i.jsx)(t.code,{children:"i"})," is an index. Below is a representation of the memory in its initial state. At the start of the boot process, physical memory is not accessible by U- or S-modes."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-title="',metastring:'Memory state when booting start \\label{sm-pmp-1}"',children:"-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\n\npmp[1:N]    |                                       | : undefined\nnet result  |---------------------------------------|   \n"})}),"\n",(0,i.jsx)(t.p,{children:"The SM sets the highest priority PMP entry to cover the address range containing itself and sets all permission bits to 0. Suddenly, the SM sets the lowest priority PMP entry to cover the full memory and sets all permission bits to 1, this will allow the OS to access the remaining memory and start booting. The result can be seen below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-title="Memory',metastring:'state just after booting"',children:"-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\n\npmp[0]       |-------|                              | : SM memory\npmp[others]  |                                      | : undefined\npmp[N]       |======================================| : OS memory\nnet result   |-------|==============================|\n"})}),"\n",(0,i.jsx)(t.p,{children:"As shown below, every time the SM creates an enclave, it will select a PMP entry for the enclave to defend its memory from other U-/S-mode software."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-title="Memory',metastring:'accessible by the untrusted host"',children:"-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\n\npmp[0]       |-------|                              | : SM memory\npmp[1]       |              |---------|             | : enclave \n                                                        memory\npmp[others]  |                                      | : undefined\npmp[N]       |======================================| : OS memory\nnet result   |-------|======|---------|=============|\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When the SM enters the enclave and executes the eapp, it flips the permission bits of the enclave's PMP entry and the last PMP entry. Untrusted shared buffer is the term for the contiguous memory region that Keystone enables the OS to allocate in the OS memory space in order to use it as an enclave's communication buffer. This is shown below.",(0,i.jsx)(t.br,{}),"\n","The SM just flips the permission bits back when it leaves the enclave. When an enclave is destroyed by the SM, the PMP entry is made available for usage by other enclaves."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-title="Memory',metastring:'accessible by a running enclave"',children:"-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\n\npmp[0]       |-------|                              | : SM memory\npmp[1]       |              |=========|             | : enclave \n                                                        memory\npmp[others]  |                                      | : undefined\npmp[N]       |                                |==|  | : untrusted \n                                                        shared \n                                                        buffer\nnet result   |-------|------|=========|-------|==|--|\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keystone-key-hierarchy",children:"Keystone key-hierarchy"}),"\n",(0,i.jsxs)(t.p,{children:["Below is shown the key hierarchy of Keystone. The root of the key hierarchy is the asymmetric processor key pair (",(0,i.jsx)(t.code,{children:"SK_D"})," and  ",(0,i.jsx)(t.code,{children:"PK_D"}),"). The asymmetric security monitor key pair (",(0,i.jsx)(t.code,{children:"SK_SK"})," and ",(0,i.jsx)(t.code,{children:"PK_SM"}),") is derived from the measurement of the security monitor (",(0,i.jsx)(t.code,{children:"H_SM"}),") and the private processor key (",(0,i.jsx)(t.code,{children:"SK_D"}),").\nAs a result, the computed security monitor key pair is bound to the processor and to the identity of the security monitor itself."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"keystone-key-hierarchy",src:n(5147).A+"",width:"963",height:"264"})," ",(0,i.jsx)(t.em,{children:"The key hierarchy of Keystone"})]}),"\n",(0,i.jsx)(t.h3,{id:"sealing-key-derivation",children:"Sealing-Key Derivation"}),"\n",(0,i.jsxs)(t.p,{children:["The image above also illustrates how ",(0,i.jsx)(t.em,{children:"sealing-keys"})," are derived. An enclave can generate a key for data encryption using the data-sealing capability, enabling it to store data in untrusted non-volatile memory outside the enclave. This key is tied to the identity of the processor, the security monitor, and the enclave. As a result, only the same enclave using the same processor and security monitor can generate the same key. Data can be encrypted using this key and stored in unsecured, non-volatile memory. After an enclave restart, it can generate the same key once more, retrieve the encrypted data from the untrusted storage, and then use the derived key to decrypt it. A sealing key is computed starting from three inputs:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the private security monitor key (",(0,i.jsx)(t.code,{children:"SK_SM"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["the hash of the enclave (",(0,i.jsx)(t.code,{children:"H_SM"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"a key identifier\nThe key identifier is an extra input for the key derivation function selectable by the enclave. A single enclave can generate several keys by giving the key identifier various values."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://doi.org/10.1109/Trustcom.2015.357",children:"Trusted Execution Environment: What It is, and What It is Not"}),", Sabt, Mohamed and Achemlal, Mohammed and Bouabdallah, Abdelmadjid"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://blog.quarkslab.com/introduction-to-trusted-execution-environment-arms-trustzone.html",children:"Introduction to Trusted Execution Environment: ARM's TrustZone"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://apps.dtic.mil/sti/pdfs/ADA108831.pdf",children:"Specification of a trusted computing base (TCB)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://keystone-enclave.org/blog/",children:"Keystone blog"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.keystone-enclave.org/en/latest/index.html",children:"Keystone Enclave's documentation"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://doi.org/10.1145/3342195.3387532",children:"Keystone: An open framework for architecting trusted execution environments"}),", Lee, Dayeol and Kohlbrenner, David and Shinde, Shweta and Asanovi'c, Krste and Song, Dawn"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://sifive.github.io/freedom-metal-docs/devguide/pmps.html",children:"Physical Memory Protection"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://riscv.org/technical/specifications/",children:"RISC-V Specification Documentations"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5147:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Keystone key hierarchy-117a0881f26bf87a76b8de575feb9075.svg"},5689:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ocall-5ad7272051de9839839fc58626f9fb6f.svg"},6924:e=>{e.exports=JSON.parse('{"permalink":"/blog/keystone-enclave","source":"@site/blog/2024-02-15-keystone-enclave/index.md","title":"Keystone Enclave","description":"This post outlines the functionalities of the Keystone Enclave framework, extracted from my master\'s thesis (updated to December 2022). Keystone is an open-source framework designed for building Trusted Execution Environments, adaptable for various platforms that are based on RISC-V hardware.","date":"2024-02-15T00:00:00.000Z","tags":[{"inline":true,"label":"trusted-computing","permalink":"/blog/tags/trusted-computing"}],"readingTime":14.63,"hasTruncateMarker":true,"authors":[{"name":"Luca Giorgino","title":"Me","url":"https://github.com/lucagiorgino","imageURL":"https://github.com/lucagiorgino.png","key":"luca","page":null}],"frontMatter":{"slug":"keystone-enclave","title":"Keystone Enclave","authors":"luca","tags":["trusted-computing"]},"unlisted":false,"nextItem":{"title":"What I learnt using Actix-web","permalink":"/blog/what-i-learnt-using-actix-web"}}')},7832:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Enclave lifecycle-4bcbdb8b30aba6302e4adb8c2901b8b3.png"},9055:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pmp-reg-79032473a5757e2b1fb12a20b4ea0e02.svg"}}]);