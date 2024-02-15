"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"what-i-learnt-using-actix-web","metadata":{"permalink":"/blog/what-i-learnt-using-actix-web","source":"@site/blog/2024-02-18-what-i-learnt-using-actix-web.md","title":"What I learnt using Actix-web","description":"TODO","date":"2024-02-18T00:00:00.000Z","formattedDate":"February 18, 2024","tags":[{"label":"rust","permalink":"/blog/tags/rust"},{"label":"actix-web","permalink":"/blog/tags/actix-web"}],"readingTime":0.005,"hasTruncateMarker":false,"authors":[{"name":"Luca Giorgino","title":"Me","url":"https://github.com/lucagiorgino","imageURL":"https://github.com/lucagiorgino.png","key":"luca"}],"frontMatter":{"slug":"what-i-learnt-using-actix-web","title":"What I learnt using Actix-web","authors":"luca","tags":["rust","actix-web"]},"unlisted":false,"nextItem":{"title":"How I structure my React applications","permalink":"/blog/how-i-structure-my-react-applications"}},"content":"TODO"},{"id":"how-i-structure-my-react-applications","metadata":{"permalink":"/blog/how-i-structure-my-react-applications","source":"@site/blog/2024-02-17-how-i-structure-my-react-applications.md","title":"How I structure my React applications","description":"Since university, I usually use React for all of my front-end projects. I will describe in this post how I structure these projects.","date":"2024-02-17T00:00:00.000Z","formattedDate":"February 17, 2024","tags":[{"label":"web-applications","permalink":"/blog/tags/web-applications"},{"label":"react","permalink":"/blog/tags/react"}],"readingTime":0.4,"hasTruncateMarker":false,"authors":[{"name":"Luca Giorgino","title":"Me","url":"https://github.com/lucagiorgino","imageURL":"https://github.com/lucagiorgino.png","key":"luca"}],"frontMatter":{"slug":"how-i-structure-my-react-applications","title":"How I structure my React applications","authors":"luca","tags":["web-applications","react"]},"unlisted":false,"prevItem":{"title":"What I learnt using Actix-web","permalink":"/blog/what-i-learnt-using-actix-web"},"nextItem":{"title":"Keystone Enclave","permalink":"/blog/keystone-enclave"}},"content":"Since university, I usually use [React](https://react.dev/) for all of my front-end projects. I will describe in this post how I structure these projects. \\n\\nTODO\\n\\n```\\nfrontend/\\n\u251c\u2500\u2500 public/\\n\u251c\u2500\u2500 src/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 api/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 components/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 hooks/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 types/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 utils/\\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.tsx\\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.css\\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.tsx\\n\u2502\xa0\xa0 \u2514\u2500\u2500 vite-env.d.ts\\n\u251c\u2500\u2500 .eslintrc.cjs\\n\u251c\u2500\u2500 .gitignore\\n\u251c\u2500\u2500 index.html\\n\u251c\u2500\u2500 package.json\\n\u251c\u2500\u2500 package-lock.json\\n\u251c\u2500\u2500 README.md\\n\u251c\u2500\u2500 LICENSE\\n\u251c\u2500\u2500 tsconfig.json\\n\u251c\u2500\u2500 tsconfig.node.json\\n\u251c\u2500\u2500 vercel.json\\n\u2514\u2500\u2500 vite.config.ts\\n```"},{"id":"keystone-enclave","metadata":{"permalink":"/blog/keystone-enclave","source":"@site/blog/2024-02-15-keystone-enclave/index.md","title":"Keystone Enclave","description":"This post outlines the functionalities of the Keystone Enclave framework, extracted from my master\'s thesis (updated to December 2022). Keystone is an open-source framework designed for building Trusted Execution Environments, adaptable for various platforms that are based on RISC-V hardware.","date":"2024-02-15T00:00:00.000Z","formattedDate":"February 15, 2024","tags":[{"label":"trusted-computing","permalink":"/blog/tags/trusted-computing"}],"readingTime":14.63,"hasTruncateMarker":true,"authors":[{"name":"Luca Giorgino","title":"Me","url":"https://github.com/lucagiorgino","imageURL":"https://github.com/lucagiorgino.png","key":"luca"}],"frontMatter":{"slug":"keystone-enclave","title":"Keystone Enclave","authors":"luca","tags":["trusted-computing"]},"unlisted":false,"prevItem":{"title":"How I structure my React applications","permalink":"/blog/how-i-structure-my-react-applications"}},"content":"This post outlines the functionalities of the [Keystone Enclave](https://keystone-enclave.org/) framework, extracted from my master\'s thesis *(updated to December 2022)*. Keystone is an open-source framework designed for building Trusted Execution Environments, adaptable for various platforms that are based on RISC-V hardware.\\n\\n\x3c!--truncate--\x3e\\n\\n## Trusted Execution Environment\\nA **Trusted Execution Environment (TEE)** is an execution environment that runs alongside but is isolated from the device\'s main operating system.\\nIt ensures that the *confidentiality* and *integrity* of the code and data loaded in the TEE are preserved. \\nTrusted applications running on TEE have access to the full capabilities of a device\'s main processor and memory, while hardware isolation shields these components from user-installed apps running in the main operating system. The various included trusted applications are protected from one another by software and cryptographic isolations within the TEE.\\\\\\nThe two most common TEE implementations at the moment are ARM TrustZone and Intel SGX. All these TEEs make design decisions based on either the target applications or threat models and these choices are fixed since they are strictly hardware related. They were not designed to have flexibility or extensibility for enclave developers. If the hardware changes or has a new feature, the enclave developer has to redesign the TEE.\\nAll TEE platforms aim to reduce the enclave\'s trusted computing base, and they have managed to achieve different degrees of success. The [Trusted Computing Base (TCB)](https://apps.dtic.mil/sti/pdfs/ADA108831.pdf) is a section of the system, which could include hardware, firmware and software. It is responsible for enforcing the security policy of the system. Additionally, closed-source hardware and microcode implementations make it impossible for a third party to evaluate the security of TEEs.\\n\\n### Customizable Trusted Execution Environment\\n[Customizable TEE](https://keystone-enclave.org/2019/07/22/Keystone-Paper.html) is the solution to closed-source hardware-implemented TEEs problems. It has been designed to be flexible, and configurable and to have a small TCB. It has been designed with clear abstractions and a modular programming model which simplifies for others to extend and add features to the TEE. An example of a customizable TEE is Keystone. Three logical actors, such as the manufacturer (who makes the hardware), the platform provider (runs the hardware, such as a cloud provider), and the enclave developer (who writes software that runs in the enclaves), were identified by Keystone developers as being a part of the customizable TEE ecosystem. In a customizable TEE, as opposed to a standard TEE, decisions made by all 3 actors together determine the security guarantees offered and the functionalities enabled.\\\\\\nKeystone offers security primitives that can be joined together via the software framework rather than creating a single instance of TEE hardware. The TEE can be modified by the creator of the enclave and the platform provider to suit their threat models or platform configurations. The Keystone project offers a general and formally proven interface for a variety of devices to create an open standard for TEEs. \\n\\n## RISC-V Background\\n[RISC-V](https://riscv.org/technical/specifications/) is open-source, which provides Keystone with several benefits. The most noticeable is that anyone can see how it works, understand the threat model it can operate under, and verify how exploits/patches function.\\\\\\nOther advantages of RISC-V are security-oriented primitives, which provide efficient isolation, the most notable being [Physical Memory Protection (PMP)](https://sifive.github.io/freedom-metal-docs/devguide/pmps.html). RISC-V is an evolving and community-driven Instruction Set Architecture (ISA). Keystone has been designed and developed using RISC-V standard security features. Moreover, the ever-growing world of RISC-V gives Keystone a wide variety of potential platforms and different deployment scenarios to which it can adapt to. \\n\\n### RISC-V Privilieged ISA\\n[RISC-V](https://riscv.org/technical/specifications/) has three software privilege levels (in increasing order of capability): user mode (U-mode), supervisor mode (S-mode), and machine mode (M-mode). Only one of the privilege modes can be active on the processor at once.\\\\\\nThe active privilege level determines what the software can do while it is running. These are typical applications for each level of privilege:\\n- *U-mode*: user processes \\n- *S-mode*: kernel (including kernel modules and device drivers) or hypervisor\\n- *M-mode*: bootloader and firmware.\\n\\nWhen the processor is in the highest privilege mode, M-mode, it is in control of all physical resources and interrupts. As with microcode in Complex Instruction Set Computer (CISC) ISAs (such as x86), M-mode is not interruptible and not affected by the interference of lower modes. M-mode is used in Keystone for executing the TCB of the system, the *security monitor* (SM).\\n\\n![keystone-vs-x86](./TEE-keystone-vs-x86.svg) *Architecture differences between x86 and Keystone*\\n\\nThe following are some advantages of utilizing an M-mode software as the TCB:\\n- programmability: unlike microcode for x86, in RISC-V M-mode software can be written using pre-existing toolchains and programming languages, such as C \\n- agile patching: since the TCB is purely software, bugs or vulnerabilities can be patched without updates, which are specific to a particular hardware \\n- verifiability: compared to hardware, the software is generally simpler to be formally verified.\\n\\n### Physical Memory Protection\\n[Physical Memory Protection (PMP)](https://sifive.github.io/freedom-metal-docs/devguide/pmps.html) is a strong standard primitive that enables M-mode to control the access to physical memory from lower privileges modes. Keystone requires PMP to implement memory isolation of enclaves.\\nOnly software in M-mode can configure the PMP, which is controlled by a series of control and status registers (CSR) that limit physical memory access to the U-mode and S-mode. Depending on the platform design, PMP entries number can change. \\n\\n![pmp-img](./pmp-reg.svg) *Image representing PMP registers*\\n\\nSince PMP exclusively works on physical addresses, S-mode can continue to support virtual addresses without affecting the security of the system. Even though each processor may implement PMP differently in hardware, the basic guarantees are part of the standard. PMP is used by Keystone Security Monitor to create memory isolation.\\n\\n\\n## Keystone components\\nA Keystone-capable system is made up of different modules operating in various privilege modes as shown in the figure below:\\n\\n![keystoneComponents](./keystone-components.png) _Keystone system with host processes, untrusted OS, security monitor, and multiple enclaves (each with runtime and eapp)_\\n\\n#### Trusted Hardware\\nTrusted Hardware is a CPU package built by an honest manufacturer that must enclose standard RISC-V cores, which are Keystone compatible, and a root of trust. Optional features of the hardware could also include memory encryption, cache partitioning, a cryptographically safe source of randomness, etc. Platform-specific plug-ins are needed by the Security Monitor to support optional features.\\n\\n### Security Monitor\\n**Security Monitor (SM)** is a trusted software that runs in M-mode and works as the small TCB in the Keystone system. Before the SM can be considered trusted, it must be verified by the hardware root of trust. Then, the root of trust *measures* the SM, generates a keypair for remote attestation, signs the public key, and eventually can continue booting. The measurement of the SM consists in computing the hash of the SM firmware image. The SM manages isolation boundaries between the enclaves and the untrusted OS, therefore it implements the majority of Keystone\'s security guarantees.  It serves as an interface for managing the enclave\'s lifecycle and utilising platform-specific features. The OS and enclaves may call SM functions using the Supervisor Binary Interface (SBI). Specifically, the SM provides the following functionality:\\n- *memory isolation* using RISC-V PMP\\n- *remote attestation* (signatures and measurement): the goal is to demonstrate to a remote client that the enclave contains the expected application, and is running on trusted hardware\\n- and other features, such as system PMP synchronization, enclave thread management and side-channel defences\\n\\n### Runtime\\nKeystone developers implemented the **Runtime (RT)** with the goal of minimal and flexible TCB. It is an S-mode software. As a result, enclave applications can use modular system-level abstraction (e.g., virtual memory management). It provides kernel-like functionality, such as system calls, trap handling, virtual memory management and so on. Although the RT functions similarly to a kernel inside an enclave, most kernel functionalities are not necessary for the enclave application. To allow enclave developers to include only the necessary functionality and minimize the TCB, Keystone developers created an example of RT called Eyrie. It enables reusability since it is compatible with multiple-user programs. And by adding RT modules, they expand RT functionality without changing user applications or without complicating the SM.\\n\\n![runtime-example](./runtime.svg) _Example of runtime reusability on the left and its functionalities on the right_\\n\\n### Enclave\\nAn **Enclave** is an environment isolated from the untrusted OS and other enclaves. Each enclave is provided with a private physical memory region which is accessible by only the enclave and SM. Each enclave consists of a user-level enclave application called *eapp* and a supervisor-level runtime. An eapp is a user-level application that executes in the enclave. A developer can create a custom eapp from scratch, or just execute an existing RISC-V binary in Keystone. The enclave lifecycle is shown below. \\n\\n![enclave-lifecycle](./Enclave%20lifecycle.png) _Enclave Lifecycle from Keystone docs_\\n\\nThe main phases are:\\n- *creation*: when an enclave is started it has a contiguous range of physical memory that is called Enclave Private Memory (EPM). In the beginning, the EPM is allocated by the untrusted host, which initialises it with the enclave\'s page table, the runtime and the enclave application. When the untrusted host calls the SM to create an enclave, the SM isolates and secures the EPM using a PMP entry, and then the PMP status is propagated throughout all of the system\'s cores. Subsequently, before the enclave execution, the enclave\'s initial state is measured and verified by the SM.\\n- *execution*: the SM enters the enclave on one of the cores as soon as the untrusted asks for it. The PMP permission is enabled to the core by the SM, and the core starts running the eapp. The RT can exit or re-enter the enclave at any time depending on the execution flow of the eapp. The PMP permissions are switched to keep the isolation each time a core exits or enters the enclave.\\n- *destruction*: the untrusted host may want to destroy the enclave at any moment, when it happens, the EPM is cleared by the SM and the PMP entry is freed. The untrusted host then definitely reclaims the released memory.\\n\\n\\n### Edge Calls\\nFunction calls that enter or exit the enclave are known as *edge calls* in Keystone, as in other enclave systems. For instance, if an enclave wants to send a network packet, it must use an edge call to deliver the data to an untrusted host process. The current version of Keystone allows *enclave* $\\\\rightarrow$ *untrusted host* calls, also known internally as *ocalls* (outbound calls, names under discussion). In the current version of Keystone, all ocall wrapping code uses shared memory regions to transfer data. When referencing data in these regions virtual address pointers are never used, instead, only offsets into the region are used.\\n \\n![ocall-lifecycle](./ocall.svg) _Simplified example of an ocall lifecycle_\\n\\n#### Edge Calls Lifecycle\\nConsider for example a generic `ocall_do_something`, as represented in Fig. [ocall-lifecycle]. This call transfers some values passed as arguments from the enclave to be processed by the host process (it could be a value to be printed, a file to be stored and so on). The enclave application calls `ocall_do_something(...)`, which is an edge wrapper function.\\\\\\n`ocall_do_something(...)` uses the system-call-like interface to the runtime to execute an *ocalls* similar to `ocall(OCALL_DO_SOMETHING, &input, sizeof(input), &ouput,  sizeof(output))`. The enclave passes a pointer to the value, the size of the argument and any necessary return buffer information. \\nAfter allocating an `edge_call` structure in the shared memory region, the runtime fills out the call type, copies the value into another part of the shared memory, and sets up the offset to the argument value. Note that, in Keystone, edge calls employ offset values in the shared memory area, rather than pointers.\\nThe runtime subsequently exits the enclave with an `SBI_CALL`, i.e. `sbi_stop_enclave()`, passing a value indicating that the enclave is executing an *ocalls* rather than shutting down. \\n\\nAfter resuming execution of the Keystone kernel driver, it checks the enclave\'s exit status, notes a pending *ocalls* and handles control to the userspace host process. \\nThe registered *ocalls* handler wrapper for `OCALL_DO_SOMETHING` is dispatched by the userspace host process, which also consumes the edge call. The wrapper generates a pointer to the argument value from the offset in the shared memory region and then calls `do_something` with the value as an argument. The host wrapper determines whether any return values must be copied into the shared memory region upon return and returns the control to the driver after setting the edge call return status to `SUCCESS`. \\n\\nThrough an `SBI_CALL`, the driver rejoins the enclave runtime. The enclave *ocalls* wrapper code is resumed once the runtime determines whether any return information has to be copied from the shared region into return buffers. Finally, the enclave function that has called at the beginning `ocall_do_something` receives any return values from the *ocalls* wrapper code.\\n\\n\\n## Memory isolation using RISC-V PMP\\nIn Keystone, developers refer to the memory section that an enclave uses as a *region* and each region is defined by a PMP entry. The SM employs two PMP registers for internal purposes (i.e. security monitor memory and untrusted memory). One active enclave may use one of the remaining PMP entries each. RISC-V PMP has several properties, the most relevant are: \\n- prioritization by index: the index of PMP entries statically determines the priority. Indices go from `0` to `N`, where `N` depends upon the platform. `0` is the highest priority, whereas `N` is the lowest \\n- default denies: if no PMP entry matches with an address, the memory access will be rejected by default.\\n\\nFor simplicity, in the following explanation PMP entries are denoted as `pmp[i]` where `i` is an index. Below is a representation of the memory in its initial state. At the start of the boot process, physical memory is not accessible by U- or S-modes. \\n\\n``` title=\\" Memory state when booting start \\\\label{sm-pmp-1}\\"\\n-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\\n\\npmp[1:N]    |                                       | : undefined\\nnet result  |---------------------------------------|   \\n```\\n\\nThe SM sets the highest priority PMP entry to cover the address range containing itself and sets all permission bits to 0. Suddenly, the SM sets the lowest priority PMP entry to cover the full memory and sets all permission bits to 1, this will allow the OS to access the remaining memory and start booting. The result can be seen below.\\n\\n``` title=\\"Memory state just after booting\\"\\n-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\\n\\npmp[0]       |-------|                              | : SM memory\\npmp[others]  |                                      | : undefined\\npmp[N]       |======================================| : OS memory\\nnet result   |-------|==============================|\\n```\\n\\nAs shown below, every time the SM creates an enclave, it will select a PMP entry for the enclave to defend its memory from other U-/S-mode software.\\n\\n``` title=\\"Memory accessible by the untrusted host\\"\\n-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\\n\\npmp[0]       |-------|                              | : SM memory\\npmp[1]       |              |---------|             | : enclave \\n                                                        memory\\npmp[others]  |                                      | : undefined\\npmp[N]       |======================================| : OS memory\\nnet result   |-------|======|---------|=============|\\n```\\n\\nWhen the SM enters the enclave and executes the eapp, it flips the permission bits of the enclave\'s PMP entry and the last PMP entry. Untrusted shared buffer is the term for the contiguous memory region that Keystone enables the OS to allocate in the OS memory space in order to use it as an enclave\'s communication buffer. This is shown below.\\\\\\nThe SM just flips the permission bits back when it leaves the enclave. When an enclave is destroyed by the SM, the PMP entry is made available for usage by other enclaves.\\n\\n``` title=\\"Memory accessible by a running enclave\\"\\n-: inaccessible (NO_PERM), =: accessible (ALL_PERM)\\n\\npmp[0]       |-------|                              | : SM memory\\npmp[1]       |              |=========|             | : enclave \\n                                                        memory\\npmp[others]  |                                      | : undefined\\npmp[N]       |                                |==|  | : untrusted \\n                                                        shared \\n                                                        buffer\\nnet result   |-------|------|=========|-------|==|--|\\n```\\n\\n## Keystone key-hierarchy\\nBelow is shown the key hierarchy of Keystone. The root of the key hierarchy is the asymmetric processor key pair (`SK_D` and  `PK_D`). The asymmetric security monitor key pair (`SK_SK` and `PK_SM`) is derived from the measurement of the security monitor (`H_SM`) and the private processor key (`SK_D`).\\nAs a result, the computed security monitor key pair is bound to the processor and to the identity of the security monitor itself.\\n\\n![keystone-key-hierarchy](./Keystone%20key%20hierarchy.svg) _The key hierarchy of Keystone_\\n\\n### Sealing-Key Derivation\\nThe image above also illustrates how *sealing-keys* are derived. An enclave can generate a key for data encryption using the data-sealing capability, enabling it to store data in untrusted non-volatile memory outside the enclave. This key is tied to the identity of the processor, the security monitor, and the enclave. As a result, only the same enclave using the same processor and security monitor can generate the same key. Data can be encrypted using this key and stored in unsecured, non-volatile memory. After an enclave restart, it can generate the same key once more, retrieve the encrypted data from the untrusted storage, and then use the derived key to decrypt it. A sealing key is computed starting from three inputs:\\n- the private security monitor key (`SK_SM`)\\n- the hash of the enclave (`H_SM`)\\n- a key identifier\\nThe key identifier is an extra input for the key derivation function selectable by the enclave. A single enclave can generate several keys by giving the key identifier various values.\\n\\n## Resources\\n\\n- [Trusted Execution Environment: What It is, and What It is Not](https://doi.org/10.1109/Trustcom.2015.357), Sabt, Mohamed and Achemlal, Mohammed and Bouabdallah, Abdelmadjid\\n- [Introduction to Trusted Execution Environment: ARM\'s TrustZone](https://blog.quarkslab.com/introduction-to-trusted-execution-environment-arms-trustzone.html)\\n- [Specification of a trusted computing base (TCB)](https://apps.dtic.mil/sti/pdfs/ADA108831.pdf)\\n- [Keystone blog](https://keystone-enclave.org/blog/)\\n- [Keystone Enclave\'s documentation](https://docs.keystone-enclave.org/en/latest/index.html)\\n- [Keystone: An open framework for architecting trusted execution environments](https://doi.org/10.1145/3342195.3387532), Lee, Dayeol and Kohlbrenner, David and Shinde, Shweta and Asanovi\'c, Krste and Song, Dawn\\n- [Physical Memory Protection](https://sifive.github.io/freedom-metal-docs/devguide/pmps.html)\\n- [RISC-V Specification Documentations](https://riscv.org/technical/specifications/)"}]}')}}]);