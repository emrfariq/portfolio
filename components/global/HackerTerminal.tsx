'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { motion } from 'framer-motion';

const commands: Record<string, string> = {
  'help': "AVAILABLE COMMANDS:\n  - help                   : List accessible breach routines\n  - cat projects.txt       : Monospace dump of classified engineering nodes\n  - skills --all           : Full stack architecture & systems matrix\n  - decrypt secret_flag.txt: Reveal embedded payload token\n  - systemctl status portfolio: Daemon heartbeat & load metrics\n  - netstat -tulnp         : Active Internet connections (servers and established)\n  - whoami                 : root\n  - clear                  : Flush screen buffer\n  - exit                   : Terminate session and return to light mode",
  'cat projects.txt': "[PROJECT 01]: CYBERPUNK TELEMETRY HUB\n  Architecture: Go / eBPF / Kafka / ClickHouse\n  Throughput: 140,000 evt/s | Sub-millisecond pipeline latency\n\n[PROJECT 02]: NEO-VAPOR COMMERCE\n  Architecture: Next.js 15 / Rust / Redis / PostgreSQL\n  Stress test benchmark: 1.2M checkouts sustained without lock contention\n\n[PROJECT 03]: SYNTH SOUNDSCAPE AI\n  Architecture: WebAudio / WebGL / WASM / WebSockets\n  Processing: Real-time dynamic audio FFT vector synthesis",
  'skills --all': "SYSTEM CAPABILITIES MATRIX:\n  Languages     : Go, TypeScript, Rust, Python, SQL, C/C++\n  Systems & Ops : Kubernetes, Docker, Terraform, Kafka, Envoy, Linux eBPF\n  Frontend      : React/Next.js, TailwindCSS, WebGL, WebSockets, Three.js\n  Databases     : PostgreSQL, ClickHouse, Redis, ScyllaDB",
  'decrypt secret_flag.txt': ">>> DECRYPTING RSA 4096-BIT KEYSTREAM...\n[+] MATCH FOUND:\nFLAG{K0N4M1_C0D3_SYST3M_0V3RR1D3_ACC3SS_GR4NT3D_2026}",
  'systemctl status portfolio': "● portfolio.service - Developer Portfolio Kernel Daemon\n     Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)\n     Active: active (running) since 1337 days ago\n   Main PID: 1337 (porto_emir.exe)\n      Tasks: 42 (limit: 4915)\n     Memory: 64.0TB\n        CPU: 100% (Overclock engaged)\n     CGroup: /system.slice/portfolio.service\n             └─1337 /usr/local/bin/porto_emir --mode=hacker --interactive",
  'netstat -tulnp': "Active Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN      1337/porto_emir     \ntcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      1337/porto_emir     \ntcp        0      0 0.0.0.0:9092            0.0.0.0:*               LISTEN      804/kafka           ",
  'whoami': "root",
};

export default function HackerTerminal() {
  const toggleHackerMode = useAppStore((state) => state.toggleHackerMode);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'system' | 'error', text: string }[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleHackerMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleHackerMode]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: 'user', text: cmd }]);

    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd.toLowerCase() === 'exit') {
      toggleHackerMode();
      return;
    }

    const output = commands[cmd.toLowerCase()];
    if (output) {
      setHistory((prev) => [...prev, { type: 'system', text: output }]);
    } else {
      setHistory((prev) => [...prev, { type: 'error', text: `bash: command not found: ${cmd}. Type 'help' to review available operations.` }]);
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const runTerminalCmd = (cmd: string) => {
    handleCommand(cmd);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-terminal-black text-terminal-green overflow-y-auto selection:bg-terminal-green selection:text-terminal-black font-body-md"
    >
      {/* CRT Effects */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px]" />
      <div className="fixed inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.85)_100%)]" />

      {/* TOP HUD BAR */}
      <div className="relative z-40 w-full bg-terminal-black border-b border-terminal-dim-green px-margin-mobile lg:px-margin py-space-sm flex flex-wrap items-center justify-between gap-space-sm shadow-[0_4px_20px_rgba(0,255,65,0.15)]">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs bg-terminal-black px-space-sm py-0.5 shadow-[2px_2px_0px_#00FF41]">
            <span className="inline-block w-2 h-2 rounded-full bg-terminal-green animate-ping" />
            <span className="font-label-sm text-label-sm tracking-widest">[PORTO_EMIR.EXE :: ROOT_ACCESS_GRANTED]</span>
          </div>
          <span className="hidden sm:inline font-label-sm text-label-sm text-terminal-dim-green">TTY: /dev/pts/0 • PID: 1337</span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs text-acid-yellow font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] animate-pulse">crisis_alert</span>
            <span className="tracking-wider">[● ROOT / OVERCLOCK 100%]</span>
          </div>
          <button 
            onClick={toggleHackerMode}
            className="flex items-center gap-space-xs bg-terminal-black text-terminal-green px-space-md py-space-xs shadow-[3px_3px_0px_#00FF41] hover:bg-terminal-green hover:text-terminal-black transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span className="font-label-sm text-label-sm">EXIT HACKER MODE [ESC]</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-20 px-margin-mobile lg:px-margin pt-space-xl pb-space-lg w-full flex flex-col gap-space-lg max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
        
        {/* ASCII GLITCH HEADER */}
        <div className="w-full flex flex-col gap-space-xs overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm text-terminal-dim-green border-b border-terminal-dim-green pb-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="text-terminal-green font-bold animate-pulse">● ONLINE</span>
              <span>NODE: porto-emir-kernel-01</span>
              <span className="hidden sm:inline">///</span>
              <span className="hidden sm:inline">TTY: /dev/pts/0</span>
              <span className="hidden sm:inline">///</span>
              <span>ARCH: x86_64_LINUX_RT</span>
            </div>
            <div className="flex items-center gap-space-sm text-bubblegum-pink">
              <span className="hidden md:inline">ENCRYPTION: AES-256-GCM</span>
              <span className="hidden md:inline">///</span>
              <span className="text-acid-yellow font-bold">PRIVILEGES: UID=0(ROOT)</span>
            </div>
          </div>

          <pre className="font-label-sm text-[8px] md:text-[11px] lg:text-[13px] leading-tight text-terminal-green select-none tracking-tighter opacity-90 overflow-x-auto whitespace-pre pt-space-xs">
{`███████╗██╗   ██╗███████╗    ██████╗ ███████╗██████╗  ██████╗  ██████╗ ████████╗
██╔════╝╚██╗ ██╔╝██╔════╝    ██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
███████╗ ╚████╔╝ ███████╗    ██████╔╝█████╗  ██████╔╝██║   ██║██║   ██║   ██║   
╚════██║  ╚██╔╝  ╚════██║    ██╔══██╗██╔══╝  ██╔══██╗██║   ██║██║   ██║   ██║   
███████║   ██║   ███████║    ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╔╝   ██║   
╚══════╝   ╚═╝   ╚══════╝    ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
[root@porto-emir ~]# EXPLOIT_PAYLOAD: PORTFOLIO_KERNEL_OVERRIDE :: ACTIVE // DAEMON v4.0.2`}
          </pre>

          <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs mt-space-sm">
            <div className="flex flex-wrap items-baseline gap-space-md">
              <h1 className="font-headline-lg text-headline-md md:text-headline-lg text-terminal-green tracking-wide drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
                IMMERSIVE ROOT CONSOLE
              </h1>
              <span className="bg-terminal-green text-terminal-black font-label-md text-label-md px-space-sm py-0.5 font-bold">
                ZERO-DAY SHELL
              </span>
            </div>
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm">
              <span className="text-terminal-dim-green">BUFFER: <span className="text-terminal-green">64.0 TB ALLOCATED</span></span>
              <span className="text-terminal-dim-green hidden md:inline">|</span>
              <span className="text-terminal-dim-green hidden md:inline">SOCKETS: <span className="text-cyber-cyan">4,028 ACTIVE</span></span>
              <span className="text-terminal-dim-green hidden sm:inline">|</span>
              <span className="text-terminal-dim-green hidden sm:inline">LATENCY: <span className="text-electric-mint">P99 &lt; 0.84ms</span></span>
            </div>
          </div>
        </div>

        {/* EXPANDED TERMINAL WORKSPACE */}
        <div className="w-full bg-terminal-black shadow-[6px_6px_0px_#00FF41] border border-terminal-dim-green flex flex-col flex-1 min-h-[460px]">
          {/* Toolbar */}
          <div className="bg-brutal-black px-space-md py-space-xs flex flex-wrap items-center justify-between gap-space-sm border-b border-terminal-dim-green">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-error inline-block" />
                <span className="w-3 h-3 rounded-full bg-acid-yellow inline-block" />
                <span className="w-3 h-3 rounded-full bg-terminal-green inline-block" />
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm">
                <span className="bg-terminal-black text-terminal-green px-space-sm py-0.5 border-t-2 border-terminal-green shadow-[0_2px_0px_#00FF41]">bash • main</span>
                <span className="text-terminal-dim-green px-space-sm py-0.5 hover:text-terminal-green cursor-pointer">syslog.tail</span>
                <span className="text-terminal-dim-green px-space-sm py-0.5 hover:text-terminal-green cursor-pointer">network.pcap</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-space-md font-label-sm text-label-sm text-terminal-dim-green">
              <span>SSH-RSA SHA256:e8f102c89...</span>
              <span className="text-terminal-green font-bold">PORT: 2222 (mTLS)</span>
            </div>
          </div>

          {/* Action Macro Commands */}
          <div className="bg-terminal-black px-space-md py-space-xs border-b border-terminal-dim-green flex flex-wrap items-center justify-start gap-space-md">
            <div className="flex items-center gap-space-xs text-acid-yellow font-label-sm text-label-sm whitespace-nowrap">
              <span className="material-symbols-outlined text-[14px]">terminal</span>
              <span>PRE-COMPILED EXECUTABLES:</span>
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {[
                { label: 'help', cmd: 'help', bg: 'bg-brutal-black hover:bg-terminal-green', text: 'text-terminal-green hover:text-terminal-black', border: 'border-terminal-dim-green', shadow: 'shadow-[2px_2px_0px_#008F24]' },
                { label: 'cat projects.txt', cmd: 'cat projects.txt', bg: 'bg-brutal-black hover:bg-terminal-green', text: 'text-terminal-green hover:text-terminal-black', border: 'border-terminal-dim-green', shadow: 'shadow-[2px_2px_0px_#008F24]' },
                { label: 'skills --all', cmd: 'skills --all', bg: 'bg-brutal-black hover:bg-terminal-green', text: 'text-terminal-green hover:text-terminal-black', border: 'border-terminal-dim-green', shadow: 'shadow-[2px_2px_0px_#008F24]' },
                { label: 'systemctl status', cmd: 'systemctl status portfolio', bg: 'bg-brutal-black hover:bg-terminal-green', text: 'text-terminal-green hover:text-terminal-black', border: 'border-terminal-dim-green', shadow: 'shadow-[2px_2px_0px_#008F24]' },
                { label: 'decrypt flag', cmd: 'decrypt secret_flag.txt', bg: 'bg-bubblegum-pink hover:bg-terminal-green', text: 'text-terminal-black font-bold', border: 'border-transparent', shadow: 'shadow-[2px_2px_0px_#00FF41]' },
                { label: 'clear', cmd: 'clear', bg: 'bg-brutal-black hover:bg-error', text: 'text-error hover:text-terminal-black', border: 'border-error', shadow: 'shadow-[2px_2px_0px_#ba1a1a]' },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => runTerminalCmd(btn.cmd)}
                  className={`px-space-sm py-0.5 font-label-sm text-label-sm border transition-all ${btn.bg} ${btn.text} ${btn.border} ${btn.shadow} active:translate-x-0.5 active:translate-y-0.5`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Live Scrolling Terminal */}
          <div ref={screenRef} className="p-space-md md:p-space-lg font-body-sm text-body-sm flex flex-col gap-space-xs flex-1 min-h-[300px] overflow-y-auto bg-terminal-black select-text" onClick={() => inputRef.current?.focus()}>
            <div className="text-terminal-dim-green font-body-sm text-body-sm mb-space-sm">
              [0.000000] Linux porto-emir 6.8.0-kali-amd64 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux<br />
              [0.001420] [SYS_INIT] Initializing low-level memory bypass... DONE.<br />
              [0.002891] [SYS_MEM] VIRTUAL_ADDR_MAP: 0x7FFF5FBFF000 -&gt; 0x00000000 [RWX PRIVILEGES GRANTED]<br />
              [0.004112] [CLUSTER] Nodes online: 128 Cores | RAM: 64TB allocated | Kafka Clusters: CONNECTED<br />
              [0.005820] [SEC_NET] Open ingress: TCP/8080 (Telemetry), TCP/443 (mTLS), TCP/9092 (Event Stream)<br />
              [0.007301] [EBPF_LOAD] Kernel probe attached to sys_enter_write / sys_enter_connect.<br />
              [0.009450] [DAEMON] Portfolio service worker PID=1337 registered with systemd.<br />
              ========================================================================================
            </div>
            <div className="text-acid-yellow font-body-sm text-body-sm mb-space-sm">
              [*] HACKER TERMINAL COMMAND PROMPT READY.<br />
              [*] Type '<span className="text-terminal-green underline cursor-pointer hover:text-white" onClick={() => runTerminalCmd('help')}>help</span>' for executable commands or click any pre-compiled macro above.<br />
              [*] Press <span className="text-bubblegum-pink font-bold">[ESC]</span> or type '<span className="text-bubblegum-pink underline cursor-pointer hover:text-white" onClick={toggleHackerMode}>exit</span>' to escape root shell.
            </div>
            
            {/* Command History */}
            <div className="flex flex-col gap-space-xs">
              {history.map((h, i) => (
                <div key={i}>
                  {h.type === 'user' ? (
                    <div className="flex items-center gap-2 text-bubblegum-pink">
                      <span>root@porto-emir:~#</span>
                      <span className="text-terminal-green">&gt; {h.text}</span>
                    </div>
                  ) : (
                    <div className={`whitespace-pre-wrap font-body-sm text-body-sm pl-4 ${h.type === 'error' ? 'text-error' : 'text-terminal-green'}`}>
                      {h.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-bubblegum-pink mt-1">
              <span className="font-label-md text-label-md hidden sm:inline">root@porto-emir:~#</span>
              <span className="font-label-md text-label-md sm:hidden">~#</span>
              <span className="font-label-md text-label-md text-terminal-green">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent text-terminal-green font-body-sm text-body-sm focus:outline-none placeholder:text-terminal-dim-green/50"
                placeholder="Type command here..."
              />
              <span className="w-2.5 h-4 bg-terminal-green animate-pulse inline-block" />
            </div>
          </div>
        </div>

        {/* BOTTOM SYSTEM STATS BAR */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-sm font-label-sm text-label-sm text-terminal-dim-green mt-auto">
          <div className="bg-brutal-black p-space-xs border border-terminal-dim-green flex flex-col sm:flex-row sm:justify-between">
            <span>CPU_LOAD:</span>
            <span className="text-terminal-green">12.4% (128T)</span>
          </div>
          <div className="bg-brutal-black p-space-xs border border-terminal-dim-green flex flex-col sm:flex-row sm:justify-between">
            <span>SWAP_USAGE:</span>
            <span className="text-terminal-green">0.00%</span>
          </div>
          <div className="bg-brutal-black p-space-xs border border-terminal-dim-green flex flex-col sm:flex-row sm:justify-between">
            <span>NETWORK_IO:</span>
            <span className="text-cyber-cyan">4.88 Gbps</span>
          </div>
          <div className="bg-brutal-black p-space-xs border border-terminal-dim-green flex flex-col sm:flex-row sm:justify-between">
            <span>THREAT_LEVEL:</span>
            <span className="text-acid-yellow font-bold">OVERRIDE</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
