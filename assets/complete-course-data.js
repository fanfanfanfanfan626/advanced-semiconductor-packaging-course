window.AdvancedPackagingCourse = {
  updated: "2026-08-23",
  searchAliases: {
    "0003": ["known good die", "KGD", "defect density", "良率 成本"],
    "0004": ["bandwidth energy distance", "pJ per bit", "die to die"],
    "0005": ["high bandwidth memory", "DRAM stack", "HBM GPU TSV"],
    "0006": ["through silicon via", "silicon interposer", "micro bump"],
    "0007": ["redistribution layer", "silicon bridge", "RDL"],
    "0008": ["power density", "thermal path", "hotspot cooling"],
    "0009": ["power delivery network", "PDN", "IR drop", "voltage droop"],
    "0010": ["coefficient of thermal expansion", "warpage", "underfill"],
    "0013": ["fan out", "2.5D"],
    "0014": ["hybrid bonding", "copper to copper bonding", "Cu Cu"],
    "0015": ["glass core substrate", "organic substrate", "ABF", "玻璃芯"],
    "0019": ["universal chiplet interconnect express", "UCIe"],
    "0022": ["PowerVia", "power integrity", "target impedance", "decoupling capacitor"],
    "0025": ["design for test", "test coverage", "DFT"],
    "0026": ["system technology co optimization", "STCO", "协同优化"],
    "0033": ["source hierarchy", "primary source", "evidence quality"],
    "0036": ["AI accelerator package", "GPU HBM"],
    "0040": ["capstone project", "learning roadmap"]
  },
  modules: [
    {
      id: 1,
      title: "物理与封装底座",
      summary: "从 wafer、die 和 package 出发，建立良率、互连、HBM、散热、供电、可靠性、测试与装配的完整因果链。",
      reference: "module-01-foundations.html",
      output: "能够沿着“设计—晶圆制造—切割测试—封装组装—系统运行”解释一颗多 die 芯片为什么能工作、为什么会失败、成本从哪里产生。",
      rules: [
        "Chiplet 描述架构拆分，2.5D/3D 描述物理集成方式；两者不能互相替代。",
        "面积增大通常增加遇到致命缺陷的机会；chiplet 改善单 die 良率，但新增互连、封装、测试与系统良率约束。",
        "带宽的第一层直觉是通道数乘以单通道速率；近距离互连通常有利于每比特能耗。",
        "HBM 内部是 3D 堆叠，GPU 与 HBM 并排放在中介层上时整体通常是 2.5D。",
        "热量越集中、热路径越困难，温度越容易升高；供电在同功率低电压下需要更大电流。",
        "先进封装必须把信号、供电、散热、机械可靠性、测试与制造良率一起设计。"
      ],
      terms: [
        { term: "Wafer / Die / Package", definition: "晶圆是制造载体，die 是切割后的裸片，package 是把 die 与互连、供电、散热和保护结构组成可使用器件。" },
        { term: "Chiplet", definition: "用于多 die 系统集成的功能裸片模块，属于架构与功能划分概念。" },
        { term: "Yield / KGD", definition: "良率必须说明阶段；KGD 是组装前已经过测试并确认可用的裸片。" },
        { term: "HBM", definition: "多层 DRAM 垂直堆叠、采用超宽接口并与计算 die 近距离连接的高带宽存储器。" },
        { term: "Interposer / TSV / Microbump", definition: "分别建立平面高密度布线、穿硅垂直导通和两个器件界面的金属接触。" },
        { term: "Power density / Thermal resistance", definition: "分别描述单位面积功耗和热量沿指定路径传出的困难程度。" },
        { term: "PDN / IR drop", definition: "PDN 是完整供电网络；IR drop 是电流经过路径电阻造成的压降。" },
        { term: "CTE / Warpage", definition: "CTE 是热膨胀系数；不同材料膨胀不一致会产生应力和封装翘曲。" }
      ]
    },
    {
      id: 2,
      title: "先进封装技术路线图",
      summary: "把 2D、2.5D、3D、fan-out、混合键合、基板、CoWoS、InFO、EMIB、Foveros、UCIe 与 HBM 放到统一坐标系中。",
      reference: "module-02-technology-map.html",
      output: "看到任何厂商缩写时，先翻译成 die 的位置、互连材料、覆盖范围、连接间距和制造边界，再比较性能、成本与成熟度。",
      rules: [
        "先描述物理结构，再使用 2D、2.5D、3D 或 fan-out 标签。",
        "微凸点依靠凸点建立接触；混合键合把介质键合与铜—铜连接结合，间距潜力更小但表面要求更严。",
        "封装基板完成尺度转换、供电、信号和机械承载；ABF 是积层基板常用层间绝缘材料，不是整块基板。",
        "CoWoS-S、R、L 的核心差异是整片硅、RDL 与局部硅互连怎样组合，而不是简单代际高低。",
        "EMIB 是局部硅桥思路；Foveros 是包含垂直堆叠和中介层方案的技术族。",
        "UCIe 标准化 die-to-die 接口与管理测试，但不会自动解决制造、热、供电、封装兼容和商业生态。"
      ],
      terms: [
        { term: "2D / 2.5D / 3D", definition: "die 在基板上连接、die 在高密度中介层/桥上并排连接、活性 die 直接垂直堆叠的三类空间结构。" },
        { term: "Fan-out", definition: "把 die 嵌入重构载体并用 RDL 将端口扩展到 die 外部的封装方法。" },
        { term: "Hybrid bonding", definition: "介质表面键合与铜—铜直接互连结合的细间距键合方式。" },
        { term: "ABF / Glass core", definition: "ABF 是积层绝缘材料；玻璃芯基板利用尺寸稳定性、平整度和可调 CTE 支持进一步缩放。" },
        { term: "CoWoS / InFO / SoIC", definition: "TSMC 的 2.5D、fan-out 与前段 3D 堆叠技术族。" },
        { term: "EMIB / Foveros", definition: "Intel 的局部硅桥与 2.5D/3D 集成技术族。" },
        { term: "UCIe", definition: "覆盖封装内 die-to-die 物理层、协议、管理、测试和软件模型的开放标准族。" }
      ]
    },
    {
      id: 3,
      title: "工程约束与协同设计",
      summary: "把宣传中的“更快、更低功耗、更可靠”拆成信号完整性、供电完整性、热、机械、测试覆盖和系统协同设计。",
      reference: "module-03-engineering.html",
      output: "能为一项先进封装方案列出必须验证的工程变量、边界条件和失效模式，并理解为什么单项最优不等于系统最优。",
      rules: [
        "高速链路要同时看损耗、反射、串扰、时钟与接收裕量，而不只是标称速率。",
        "PDN 是随频率变化的网络；电容位置、容量和寄生参数共同决定瞬态供电。",
        "热分析必须明确发热分布、材料、界面和冷却边界，不能只比较总功耗。",
        "机械可靠性由材料 CTE、刚度、厚度、几何和温度循环共同决定。",
        "测试覆盖不是测试次数；关键是能否激活、观察并定位目标缺陷。",
        "STCO 把架构、制程、封装、主板、供电和冷却共同优化，避免局部最优。"
      ],
      terms: [
        { term: "Signal integrity", definition: "信号到达接收端后仍能被正确判读的能力，受到损耗、反射、串扰和抖动等因素影响。" },
        { term: "Eye margin", definition: "接收端在时间和电压方向上的可判读裕量。" },
        { term: "PDN impedance", definition: "供电网络在不同频率下阻碍电流变化的程度。" },
        { term: "Hotspot coupling", definition: "相邻发热区域通过材料传热而互相抬高温度。" },
        { term: "Fatigue", definition: "结构在反复热循环或机械载荷下逐渐积累损伤。" },
        { term: "DFT", definition: "Design for Test，把可控性、可观察性和诊断能力设计进芯片与封装。" },
        { term: "STCO", definition: "System-Technology Co-Optimization，跨系统架构、芯片和封装技术共同优化。" }
      ]
    },
    {
      id: 4,
      title: "制造、产能与成本",
      summary: "从工艺设备与材料进入产能、吞吐、良率、成本和资格认证，形成可以用于产业研究的制造经济学底座。",
      reference: "module-04-manufacturing-economics.html",
      output: "能够把“扩产”“缺货”“成本下降”翻译成工具数量、吞吐、稼动、产品组合、合格率和客户认证等可验证变量。",
      rules: [
        "先进封装不是单台设备完成，而是光刻、刻蚀、沉积、电镀、CMP、减薄、切割、键合、塑封、量测和测试的工艺链。",
        "材料要按介电、导电、热、机械、界面和可靠性属性分析，而不能只记供应商。",
        "有效产能约等于工具数 × 单机吞吐 × 时间 × 稼动率 × 良率，并受到产品组合与资格认证约束。",
        "成本应比较每颗合格封装，而不是只比较单片晶圆、单颗 die 或名义封装价格。",
        "瓶颈是系统中限制总输出的环节；扩充一个非瓶颈环节不会等比例增加最终产出。",
        "认证、良率爬坡和客户切换成本会让物理产能与商业可用产能之间出现时间差。"
      ],
      terms: [
        { term: "Throughput / UPH", definition: "设备单位时间处理的产品数量，UPH 通常表示每小时单位数。" },
        { term: "Uptime / Utilization", definition: "设备可运行时间比例与实际被生产占用的程度，口径必须区分。" },
        { term: "Cycle time", definition: "产品从进入到完成一段制造流程所经历的总时间。" },
        { term: "Qualified capacity", definition: "已经通过特定客户、产品和工艺认证并能稳定交付的产能。" },
        { term: "Cost per good package", definition: "总投入成本除以最终合格封装数量，包含良率损失和测试成本。" },
        { term: "Bottleneck", definition: "当前限制整个系统最终输出的最紧约束环节。" }
      ]
    },
    {
      id: 5,
      title: "先进封装投资研究",
      summary: "从价值链地图、证据等级和财务映射出发，建立不依赖故事、可复核、可更新的公司与产业研究流程。",
      reference: "module-05-investment-research.html",
      output: "能够完成一份以一手披露为主、区分事实与推断、包含基准/乐观/悲观情景但不越界到个股买卖建议的技术产业研究备忘录。",
      rules: [
        "先画价值链和付款关系，再判断需求增长会落到谁的收入与利润。",
        "证据优先级通常是标准/监管文件/审计年报，其次是技术论文与产品资料，再到管理层表述和二手报道。",
        "收入增长可拆成数量、价格与产品组合；毛利变化还需考虑良率、利用率、折旧和爬坡成本。",
        "资本开支是未来能力的投入，不等于当期产能、当期收入或必然回报。",
        "技术壁垒必须落到可验证变量：工艺窗口、良率、认证、客户切换、知识产权和复制时间。",
        "情景分析要公开假设、传导链和失效条件，避免把单一路径包装成确定预测。"
      ],
      terms: [
        { term: "Primary source", definition: "标准、监管文件、公司法定披露、原始论文或直接技术规格等第一手材料。" },
        { term: "Attach rate", definition: "某项组件或技术在目标系统中的采用比例，必须定义分母。" },
        { term: "Content per system", definition: "每套系统中某环节对应的数量或价值量。" },
        { term: "CapEx", definition: "资本性支出，用于建设或获得长期资产；与收入存在建设、认证和爬坡时滞。" },
        { term: "Customer concentration", definition: "收入或需求依赖少数客户的程度，可能同时带来规模与议价风险。" },
        { term: "Scenario analysis", definition: "用多组公开假设计算不同可能结果，并明确触发条件和风险。" }
      ]
    },
    {
      id: 6,
      title: "科研与大学专业准备",
      summary: "把兴趣映射到电子、材料、机械、制造与计算方向，并训练读论文、设计实验、做模型和完成综合作品的能力。",
      reference: "module-06-research-university.html",
      output: "形成一份个人基础课程清单、一项可执行的仿真或实验小课题、一份研究提案和一套能用于申请或展示的综合作品。",
      rules: [
        "选专业先看自己想解决哪类变量：电信号、材料界面、热机械、制造良率还是系统架构。",
        "数学、物理、化学、统计和编程是跨方向共同底座，但不同专业的权重不同。",
        "读资料先识别类型：标准定义接口，论文证明方法，专利保护权利边界，产品页说明供货主张。",
        "科研问题必须包含对象、变量、边界条件、可测结果和对照基线。",
        "模型必须经过量纲检查、极端值检查、敏感性分析和至少一种独立验证。",
        "最终作品以证据、因果、可复现性和诚实表达不确定性为评分核心。"
      ],
      terms: [
        { term: "Independent variable", definition: "实验或模型中主动改变的输入变量。" },
        { term: "Dependent variable", definition: "随着输入变化而观测或计算的结果变量。" },
        { term: "Control", definition: "用于比较并排除其他解释的基准条件或对照组。" },
        { term: "Sensitivity analysis", definition: "系统改变关键假设，观察结果对各变量的敏感程度。" },
        { term: "Validation", definition: "用独立数据、实验、另一种模型或已知极限检验结果是否可信。" },
        { term: "Capstone", definition: "综合运用多项能力、产生可展示成果的结课项目。" }
      ]
    }
  ],
  catalog: [
    { id: "0001", slug: "system-scaling-map", title: "先进封装在系统缩放中的位置", module: 1, state: "已掌握" },
    { id: "0002", slug: "wafer-die-package-system", title: "从 Wafer 到 Die 再到 Package", module: 1, state: "已掌握" },
    { id: "0003", slug: "yield-cost-chiplets", title: "良率、成本与 Chiplet 权衡", module: 1, state: "已掌握" },
    { id: "0004", slug: "bandwidth-energy-distance", title: "带宽、距离与每比特能耗", module: 1, state: "已掌握" },
    { id: "0005", slug: "hbm-stacked-and-close", title: "HBM 为什么既要堆高，也要靠近 GPU", module: 1, state: "已掌握" },
    { id: "0006", slug: "interposer-tsv-microbump", title: "中介层、TSV、微凸点分别做什么", module: 1, state: "已掌握" },
    { id: "0007", slug: "interposer-rdl-bridge", title: "整片硅、RDL 与局部硅桥怎么选", module: 1, state: "已掌握" },
    { id: "0008", slug: "power-density-thermal-path", title: "芯片靠得更近，热量怎么出去", module: 1, state: "已掌握" },
    { id: "0009", slug: "power-delivery-voltage-droop", title: "电压更低，为什么供电反而更难", module: 1, state: "已整理" },
    { id: "0010", slug: "cte-warpage-underfill", title: "CTE、翘曲与底部填充", module: 1, state: "完整内容" },
    { id: "0011", slug: "test-chain-kgd", title: "测试链如何保护昂贵封装", module: 1, state: "完整内容" },
    { id: "0012", slug: "assembly-process-flow", title: "先进封装的制造与组装流程", module: 1, state: "完整内容" },
    { id: "0013", slug: "2d-25d-3d-fanout", title: "2D、2.5D、3D 与 Fan-out", module: 2, state: "完整内容" },
    { id: "0014", slug: "microbump-hybrid-bonding", title: "微凸点与混合键合", module: 2, state: "完整内容" },
    { id: "0015", slug: "substrate-abf-glass", title: "有机基板、ABF 与玻璃芯", module: 2, state: "完整内容" },
    { id: "0016", slug: "cowos-s-r-l", title: "CoWoS-S、R、L 的结构差异", module: 2, state: "完整内容" },
    { id: "0017", slug: "info-fanout", title: "InFO 与 Fan-out 怎样重构封装", module: 2, state: "完整内容" },
    { id: "0018", slug: "emib-foveros", title: "EMIB 与 Foveros 的技术地图", module: 2, state: "完整内容" },
    { id: "0019", slug: "ucie-stack", title: "UCIe 标准化了什么", module: 2, state: "完整内容" },
    { id: "0020", slug: "hbm-generations", title: "HBM 代际升级到底升级什么", module: 2, state: "完整内容" },
    { id: "0021", slug: "signal-integrity", title: "高速互连的信号完整性", module: 3, state: "完整内容" },
    { id: "0022", slug: "power-integrity", title: "供电完整性与 PDN 阻抗", module: 3, state: "完整内容" },
    { id: "0023", slug: "thermal-modeling", title: "热点、边界条件与热模型", module: 3, state: "完整内容" },
    { id: "0024", slug: "mechanical-reliability", title: "翘曲、疲劳与机械可靠性", module: 3, state: "完整内容" },
    { id: "0025", slug: "dft-test-coverage", title: "DFT、测试覆盖与缺陷逃逸", module: 3, state: "完整内容" },
    { id: "0026", slug: "stco-codesign", title: "为什么必须做系统—技术协同优化", module: 3, state: "完整内容" },
    { id: "0027", slug: "equipment-process-map", title: "先进封装设备与工艺地图", module: 4, state: "完整内容" },
    { id: "0028", slug: "materials-map", title: "封装材料的六类功能", module: 4, state: "完整内容" },
    { id: "0029", slug: "capacity-throughput-yield", title: "产能、吞吐、稼动与良率", module: 4, state: "完整内容" },
    { id: "0030", slug: "cost-per-good-package", title: "每颗合格封装的成本模型", module: 4, state: "完整内容" },
    { id: "0031", slug: "bottleneck-qualification", title: "瓶颈、认证与良率爬坡", module: 4, state: "完整内容" },
    { id: "0032", slug: "value-chain-map", title: "先进封装价值链地图", module: 5, state: "完整内容" },
    { id: "0033", slug: "source-hierarchy", title: "投资研究的证据等级", module: 5, state: "完整内容" },
    { id: "0034", slug: "financial-mapping", title: "把技术变量映射到财务报表", module: 5, state: "完整内容" },
    { id: "0035", slug: "company-research-framework", title: "先进封装公司研究框架", module: 5, state: "完整内容" },
    { id: "0036", slug: "ai-package-case-study", title: "AI 加速器封装案例拆解", module: 5, state: "完整内容" },
    { id: "0037", slug: "major-prerequisite-map", title: "大学专业与基础课程地图", module: 6, state: "完整内容" },
    { id: "0038", slug: "read-technical-sources", title: "怎样读标准、论文、专利与产品资料", module: 6, state: "完整内容" },
    { id: "0039", slug: "experiment-simulation-design", title: "怎样设计一个可验证的小研究", module: 6, state: "完整内容" },
    { id: "0040", slug: "capstone-roadmap", title: "结课项目与长期学习路线", module: 6, state: "完整内容" }
  ],
  sources: {
    ieeeHir: { title: "IEEE EPS, Heterogeneous Integration Roadmap", url: "https://resourcecenter.eps.ieee.org/roadmap/heterogenous-integration/heterogenous-integration-roadmap", note: "异质集成的互连、协同设计、建模、测试、热与可靠性路线图入口。" },
    ieeeTest: { title: "IEEE HIR 2023, Test Technology", url: "https://eps.ieee.org/wp-content/uploads/2025/11/ch17_test.pdf", note: "多 die、KGD、堆叠、设计可测性与系统级测试。" },
    ieeeThermal: { title: "IEEE HIR 2023, Thermal Management", url: "https://eps.ieee.org/images/files/HIR_2023/ch20_thermalfinal.pdf", note: "异质集成的热路径、界面热阻、3D 堆叠与先进冷却。" },
    intelAssembly: { title: "Intel Tech 101, How Silicon Die Become Chip Packages", url: "https://newsroom.intel.com/tech101/how-silicon-die-become-chip-packages", note: "Chip attach、epoxy、lid、burn-in、最终测试与平台验证的官方流程。" },
    intelPackaging: { title: "Intel Foundry, Advanced Packaging", url: "https://www.intel.com/content/www/us/en/foundry/packaging.html", note: "EMIB、Foveros、RDL/硅中介层、3D 堆叠和先进测试技术族。" },
    intelResearch: { title: "Intel Foundry, Packaging & Test Research", url: "https://www.intel.com/content/www/us/en/foundry/research/packaging-and-test.html", note: "多 die 架构、基板、中介层、供电、热、可制造性与测试研究范围。" },
    intelPower: { title: "Intel Foundry, Accelerating HPC and AI", url: "https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2025-11/intel-foundry-hpc-ai-brief.pdf", note: "PowerVia、MIM/eDTC、垂直供电与先进多 die 系统的供电方案。" },
    intelGlass: { title: "Intel Foundry, Glass-Core Substrate", url: "https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2024-08/foundry-glass-core-substrates-pb.pdf", note: "玻璃芯基板的尺寸稳定性、CTE、翘曲、互连密度与供电信号潜力。" },
    tsmc3d: { title: "TSMC, 3DFabric", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm", note: "CoWoS、InFO 与 SoIC 在系统整合中的官方技术族谱。" },
    tsmcCowos: { title: "TSMC, CoWoS", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/cowos.htm", note: "CoWoS-S、R、L 的中介层材料、布线与局部硅互连差异。" },
    tsmcSoic: { title: "TSMC, The Whats, Whys, and Hows of SoIC", url: "https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/SoIC_inDepth.htm", note: "Chip-on-wafer、wafer-on-wafer 与高密度垂直键合。" },
    tsmcInfo: { title: "TSMC, InFO Wafer Level Integrated Fan-Out", url: "https://3dfabric.tsmc.com/schinese/dedicatedFoundry/technology/del/InFO_presentation_2016_ECTC_InFO_PoP_architecture.htm", note: "多层高密度 RDL fan-out 与系统集成的原始技术论文入口。" },
    tsmcInterconnect: { title: "TSMC Research, Interconnect", url: "https://research.tsmc.com/page/interconnect/1.html", note: "互连几何、材料、制程与布局对性能、功耗、可靠性和良率的影响。" },
    tsmcAnnual: { title: "TSMC 2025 Annual Report", url: "https://investor.tsmc.com/static/annualReports/2025/english/index.html", note: "先进制程、3DFabric、产能投资、风险和财务披露的法定年度资料。" },
    micronHbm: { title: "Micron, High-bandwidth memory", url: "https://www.micron.com/products/memory/hbm", note: "HBM 的 3D 堆叠、TSV、超宽接口和硅中介层近距离集成。" },
    micronHbm4: { title: "Micron, HBM4", url: "https://www.micron.com/products/memory/hbm/hbm4", note: "截至 2026 年的 HBM4 总线宽度、单堆栈带宽、容量与量产路线。" },
    ucie: { title: "UCIe Consortium, Specifications", url: "https://www.uciexpress.org/specifications", note: "Die-to-die 物理层、协议、软件、管理、DFx 与 3D 封装支持。" },
    imec3d: { title: "imec, 3D Integration", url: "https://www.imec-int.com/en/expertise/cmos-advanced/connect/3d-integration", note: "Microbump、die-to-wafer hybrid bonding 与 3D 集成研究。" },
    imecThermal: { title: "imec, Navigating Thermal Challenges", url: "https://www.imec-int.com/en/articles/navigating-thermal-challenges-advanced-systems-chip", note: "功率密度、热点、边界条件和热感知系统—技术协同优化。" },
    imecPower: { title: "imec, Backside Power Delivery", url: "https://www.imec-int.com/en/articles/how-power-chips-backside", note: "传统供电路径、IR drop、PDN 拥塞与背面供电研究。" },
    ajinomotoAbf: { title: "Ajinomoto, Electronic Materials / ABF", url: "https://www.ajinomoto.com/business/healthcare-and-others", note: "ABF 作为半导体积层封装基板层间绝缘材料的官方说明。" },
    appliedPackaging: { title: "Applied Materials, Heterogeneous Integration Technologies", url: "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-introduces-new-technologies-and-capabilities/", note: "Etch、PVD、CVD、电镀、表面处理、RDL、TSV 和 hybrid bonding 设备技术链。" },
    asmpt: { title: "ASMPT, Advanced Packaging Solutions", url: "https://semi.asmpt.com/en/products/ap/", note: "切割、fan-out、热压键合、混合键合、精密贴装与检测设备。" },
    amdChiplet: { title: "AMD, Chiplet Architecture White Paper", url: "https://www.amd.com/content/dam/amd/en/documents/solutions/technologies/chiplet-architecture-white-paper.pdf", note: "Chiplet 的良率、复用与节点优化优势，以及封装、互连、热和成本约束。" },
    secEdgar: { title: "U.S. SEC, About EDGAR", url: "https://www.sec.gov/submit-filings/about-edgar", note: "免费访问上市公司财务、运营、风险和证券披露的一手监管数据库。" },
    amkorInvestor: { title: "Amkor, 2025 Investor Materials", url: "https://ir.amkor.com/static-files/9a814cb2-2326-4653-aa00-54bb71089837", note: "OSAT 的先进封装能力、资本开支、客户应用与商业披露示例。" },
    mitCircuits: { title: "MIT OpenCourseWare, Circuits and Electronics", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", note: "电阻网络、MOS、储能元件、动态电路、能量和功率的本科基础。" },
    mitMaterials: { title: "MIT OpenCourseWare, Introduction to Solid State Chemistry", url: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/", note: "晶体、半导体、缺陷、扩散、聚合物与电子材料的基础。" },
    mitHeat: { title: "MIT OpenCourseWare, Introduction to Heat Transfer", url: "https://ocw.mit.edu/courses/2-051-introduction-to-heat-transfer-fall-2015/", note: "导热、热阻、瞬态热、对流、辐射和换热器的本科基础。" },
    mitStats: { title: "MIT OpenCourseWare, Probability and Statistics", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/", note: "概率分布、统计推断、置信区间、回归和模拟方法。" },
    mitPython: { title: "MIT OpenCourseWare, Introduction to Programming in Python", url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/", note: "面向零基础的 Python、抽象、测试、调试与计算问题求解。" },
    ieeeAuthor: { title: "IEEE Author Center, Create Your Journal Article", url: "https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/", note: "工程论文的标题、摘要、正文、图表与投稿结构。" }
  },
  lessons: {
    "0010": {
      title: "CTE、翘曲与底部填充",
      lede: "不同材料受热后伸长程度不同。先进封装把硅、铜、聚合物和基板紧密结合，这种不一致会转化成弯曲、界面应力和焊点疲劳。",
      win: "能沿着“温度变化—膨胀不一致—结构受约束—翘曲/应力—可靠性风险”解释机械失效。",
      modelTitle: "热循环怎样变成机械损伤",
      steps: [
        { title: "温度变化", body: "回流焊、测试和使用过程都会经历升温与降温。", source: "intelAssembly" },
        { title: "膨胀不同", body: "硅、铜、焊料、聚合物和基板具有不同 CTE。", source: "ieeeThermal" },
        { title: "相互约束", body: "粘在一起的材料不能自由伸缩，于是出现弯曲和界面应力。" },
        { title: "损伤累积", body: "反复循环可能导致焊点疲劳、开裂、分层或接触失效。", source: "ieeeHir" }
      ],
      ideas: [
        { tag: "CTE", title: "热膨胀系数不是温度", body: "CTE 描述材料每升高单位温度时尺寸变化的倾向；风险来自相邻材料的差值。" },
        { tag: "WARP", title: "翘曲是系统结果", body: "面积、厚度、刚度、材料层叠和温度共同决定封装弯曲，不能只归因于一种材料。" },
        { tag: "UF", title: "Underfill 分担载荷", body: "底部填充材料填入 die 与基板间隙并分散局部应力，但会引入新的材料、工艺和返修约束。", source: "intelAssembly" }
      ],
      lenses: {
        engineering: "比较 CTE、弹性模量、厚度、封装尺寸和温度循环，再观察翘曲、焊点应变和界面分层。",
        investment: "大尺寸封装增加材料、量测、翘曲控制和良率管理价值，但供应商优势必须由认证与稳定量产证明。",
        research: "适合材料、机械和封装方向；可用有限元、数字图像相关、阴影云纹或热循环试验研究。"
      },
      case: { title: "区分电问题与机械问题", prompt: "一块大封装在回流焊温度下弯曲，冷却后部分微凸点开路；高速链路设计本身没有改变。", answer: "首先检查 CTE、层叠刚度与翘曲", reasoning: "故障与温度循环和物理接触同步出现，首先是热—机械路径，而不是协议或带宽设置。" },
      sources: ["ieeeThermal", "intelAssembly", "ieeeHir"],
      takeaway: "不同材料膨胀不一致，在结构约束下形成翘曲和应力；underfill 能分担载荷，但不是没有代价的万能胶。"
    },
    "0011": {
      title: "测试链如何保护昂贵封装",
      lede: "多 die 封装的测试目标不是最后才判断“好或坏”，而是在价值不断累积的过程中尽早筛除缺陷，并在组装后验证新产生的互连。",
      win: "能区分 wafer sort、die sort、堆叠/组装后测试、burn-in、final test 与 system-level test 的职责。",
      modelTitle: "价值越往后累积，漏检代价越高",
      steps: [
        { title: "Wafer sort", body: "die 仍在晶圆上时，用探针和测试机筛查基本电性。", source: "intelPackaging" },
        { title: "Die / stack sort", body: "切割后或形成子堆栈后确认 KGD/KGS，减少坏件进入昂贵组装。", source: "ieeeTest" },
        { title: "Final + burn-in", body: "封装后检查完整功能、性能和早期寿命缺陷。", source: "intelAssembly" },
        { title: "System-level test", body: "在更接近真实工作负载和平台条件下捕获边缘故障。", source: "intelPackaging" }
      ],
      ideas: [
        { tag: "EARLY", title: "早筛减少连带浪费", body: "昂贵 GPU、HBM、中介层和基板组合后，任一坏件都可能让整套封装报废。" },
        { tag: "NEW", title: "组装会产生新缺陷", body: "即使所有 die 都是 KGD，键合、微凸点、TSV、应力和污染仍可能在组装阶段产生失效。", source: "ieeeTest" },
        { tag: "COVER", title: "测试覆盖不是测试次数", body: "关键是缺陷能否被激活、传播到可观察点并被定位，而不是简单增加测试步骤。" }
      ],
      lenses: {
        engineering: "建立缺陷类型—测试阶段—可观察信号的矩阵，并评估测试时间、探针接触和覆盖率。",
        investment: "测试价值随封装单价和复杂度提升，但收入还取决于测试时长、并行度、设备利用率和客户自测比例。",
        research: "适合电气、统计和制造方向；可研究 DFT、故障诊断、自适应测试与测试数据分析。"
      },
      case: { title: "把测试放在最有价值的位置", prompt: "四颗昂贵 chiplet 将共同组装；其中一种 die 的缺陷率明显更高，而且可以在切割后被电性测试识别。", answer: "在最终组装前做 die sort 并形成 KGD", reasoning: "可在价值尚未全部累积前拦截缺陷，同时仍需保留组装后的互连与系统测试。" },
      sources: ["ieeeTest", "intelAssembly", "intelPackaging"],
      takeaway: "测试应沿价值链分层布置：组装前保护昂贵投入，组装后捕获新互连缺陷，系统级再验证真实运行边界。"
    },
    "0012": {
      title: "先进封装的制造与组装流程",
      lede: "先进封装不是把 die 放进外壳，而是从晶圆级互连、减薄、切割和筛选开始，经过精密贴装、键合、填充、散热结构和多级测试形成产品。",
      win: "能把主要工序放回正确先后关系，并知道每一步会新增哪些缺陷和价值。",
      modelTitle: "从完成晶圆到可交付封装",
      steps: [
        { title: "晶圆级准备", body: "形成 RDL、凸点或 TSV，并进行减薄、临时键合和量测。", source: "appliedPackaging" },
        { title: "切割与筛选", body: "晶圆切成 die，经过 wafer/die sort 选出可用裸片。", source: "intelAssembly" },
        { title: "贴装与键合", body: "将 die 精确放到中介层、基板或晶圆上，完成回流、TCB 或 hybrid bonding。", source: "asmpt" },
        { title: "保护与验证", body: "加入 underfill、mold、TIM、lid，再进行 burn-in、final test 和平台验证。", source: "intelAssembly" }
      ],
      ideas: [
        { tag: "FLOW", title: "工序之间相互约束", body: "前一步的平整度、污染和厚度会决定后一步的对准、键合和良率窗口。" },
        { tag: "METRO", title: "量测不是附属环节", body: "越细的 RDL、凸点和键合间距，越需要形貌、缺陷、厚度与对准量测。", source: "appliedPackaging" },
        { tag: "TEST", title: "制造与测试交替出现", body: "测试不是流程末尾的一次动作，而是晶圆、die、子组件和最终系统之间的多个闸门。" }
      ],
      lenses: {
        engineering: "用 process flow diagram 标出输入、输出、关键参数、缺陷模式和检测点。",
        investment: "设备需求由工艺步骤、重复次数、吞吐和良率决定；不能把一个封装产品简单对应到一台设备。",
        research: "适合制造、材料和自动化方向；可研究工艺窗口、在线量测、缺陷分类和闭环控制。"
      },
      case: { title: "定位键合前的关键条件", prompt: "Hybrid bonding 后出现大面积未接触区域，但贴装坐标看起来正确。", answer: "优先检查表面平整度、颗粒和清洁", reasoning: "Hybrid bonding 依赖接近原子尺度的界面质量；正确坐标不能弥补表面起伏或污染。" },
      sources: ["intelAssembly", "appliedPackaging", "asmpt"],
      takeaway: "先进封装是一条相互耦合的制造链；每一步既增加价值，也可能新增缺陷，因此量测和测试必须嵌入流程。"
    },
    "0013": {
      title: "2D、2.5D、3D 与 Fan-out",
      lede: "这些名词不是统一维度上的四个等级。前三者主要描述 die 的空间互连结构，fan-out 主要描述利用重构载体和 RDL 扩展端口的方法。",
      win: "能先描述结构，再给它贴上 2D、2.5D、3D 或 fan-out 标签。",
      modelTitle: "用两个问题分类：die 怎样放，线路在哪里",
      steps: [
        { title: "2D", body: "多颗 die 位于封装基板上，主要通过基板线路互连。", source: "ieeeHir" },
        { title: "2.5D", body: "die 并排，通过硅/RDL 中介层或局部硅桥进行高密度连接。", source: "tsmc3d" },
        { title: "3D", body: "活性 die 垂直堆叠，通过 TSV、微凸点或 hybrid bonding 连接。", source: "tsmcSoic" },
        { title: "Fan-out", body: "die 被重构进载体，RDL 将 I/O 从 die 区域向外扩展，可服务单 die 或多 die。", source: "tsmcInfo" }
      ],
      ideas: [
        { tag: "AXIS", title: "分类轴不同", body: "Fan-out 可以形成多 die 系统，但不能简单当作比 2.5D 更高或更低的维度。" },
        { tag: "PATH", title: "看高速路径", body: "判断封装路线时，找出 die-to-die 数据究竟经过基板、中介层、桥、RDL 还是垂直界面。" },
        { tag: "BOUND", title: "厂商定义可能不同", body: "同一商业名称下可能包含多个结构版本，因此应以剖面、材料和接口为准。" }
      ],
      lenses: {
        engineering: "比较互连间距、长度、覆盖面积、供电热路径、组装顺序和可测试性。",
        investment: "同属先进封装不代表价值量相同；硅面积、RDL 层数、基板规格和键合步骤决定不同需求。",
        research: "训练结构分类和边界定义；论文比较必须确保基线、面积、功耗和冷却条件一致。"
      },
      case: { title: "先描述再命名", prompt: "GPU 与 HBM 横向并排在硅中介层上，同时每组 HBM 内部垂直堆叠。", answer: "整体是 2.5D，HBM 内部是 3D", reasoning: "观察尺度不同可以同时得到两个正确标签；这不是术语矛盾。" },
      sources: ["tsmc3d", "tsmcSoic", "tsmcInfo", "ieeeHir"],
      takeaway: "2D/2.5D/3D 先看空间结构，fan-out 先看重构载体与 RDL；永远先画剖面，再背名称。"
    },
    "0014": {
      title: "微凸点与混合键合",
      lede: "两者都能连接上下 die，但界面物理机制不同：微凸点依靠凸点接触，hybrid bonding 同时键合介质表面和铜互连。",
      win: "能解释 hybrid bonding 为什么支持更细间距，也能指出它对平整度、洁净度和对准提出更高要求。",
      modelTitle: "从有凸点接触到直接界面键合",
      steps: [
        { title: "Microbump", body: "在对应焊盘上形成微小金属凸点，通过回流或热压完成电连接和机械连接。", source: "imec3d" },
        { title: "间距缩小", body: "凸点尺寸、桥连、焊料挤出和 underfill 流动开始限制进一步缩放。" },
        { title: "Hybrid bond", body: "介质表面先键合，铜焊盘随后形成直接连接，省去传统焊料凸点。", source: "appliedPackaging" },
        { title: "新工艺窗口", body: "表面平整、颗粒控制、铜凹陷/突出和亚微米级对准变得关键。", source: "tsmcSoic" }
      ],
      ideas: [
        { tag: "PITCH", title: "间距决定 I/O 密度", body: "单位面积可放置的连接越多，垂直带宽密度越高，接口驱动距离也可缩短。" },
        { tag: "SURFACE", title: "界面质量成为良率核心", body: "一个颗粒或局部高度差可能阻止大片区域接触，因此 CMP、清洗与量测非常重要。", source: "appliedPackaging" },
        { tag: "MATURE", title: "更先进不等于立即替代", body: "Microbump 具有成熟生态；hybrid bonding 的选择还取决于产品价值、间距需求、返修和量产成熟度。" }
      ],
      lenses: {
        engineering: "比较 pitch、接触电阻、寄生参数、界面空洞、对准误差、热路径和返修可能性。",
        investment: "受益环节可能包括 CMP、清洗、量测、检测和高精度键合；收入兑现取决于量产节奏与设备吞吐。",
        research: "适合材料、表面科学、精密机械与制造方向；研究界面化学、形貌、退火和缺陷传播。"
      },
      case: { title: "根据目标间距选择", prompt: "设计要求极高垂直 I/O 密度，传统焊料凸点的尺寸与桥连风险已经成为主要限制。", answer: "优先评估 hybrid bonding", reasoning: "它去除传统焊料凸点，有更细间距潜力，但必须同时验证表面和对准良率。" },
      sources: ["imec3d", "appliedPackaging", "tsmcSoic"],
      takeaway: "Microbump 用凸点跨界面，hybrid bonding 用介质与铜直接键合；密度提高的代价是更严格的表面与对准控制。"
    },
    "0015": {
      title: "有机基板、ABF 与玻璃芯",
      lede: "封装基板把 die 上极细密的连接逐步转换成主板可接受的尺度，同时承担供电、信号和机械支撑。ABF 和玻璃芯位于不同层级。",
      win: "能区分基板、ABF 层间材料和玻璃芯，并用尺寸稳定性、布线与翘曲比较路线。",
      modelTitle: "基板完成三种尺度转换",
      steps: [
        { title: "微细端", body: "上表面连接 die、chiplet 或中介层，需要较细线路与小焊盘。" },
        { title: "积层布线", body: "铜线路和 ABF 等层间绝缘材料逐层建立信号与电源网络。", source: "ajinomotoAbf" },
        { title: "核心承载", body: "有机或玻璃芯提供厚度、刚度、通孔和尺寸稳定性。", source: "intelGlass" },
        { title: "主板端", body: "底部 BGA 将连接转换到更大间距，便于安装到系统主板。" }
      ],
      ideas: [
        { tag: "ABF", title: "ABF 不是整块基板", body: "它是 build-up 层之间的薄膜绝缘材料，铜线路和过孔在其上形成。", source: "ajinomotoAbf" },
        { tag: "GLASS", title: "玻璃改善尺寸稳定性", body: "玻璃芯可提供更平整、可调 CTE 和较高通孔密度潜力，但仍需加工、金属化和可靠性生态。", source: "intelGlass" },
        { tag: "STACK", title: "层数与规则共同决定能力", body: "只看基板面积不足以判断价值；还要看层数、线宽间距、通孔密度、损耗和良率。" }
      ],
      lenses: {
        engineering: "把基板视为多层传输线、供电网络和机械结构，联合检查阻抗、翘曲、通孔和装配。",
        investment: "材料与基板厂的价值量由规格升级、层数、面积、良率和认证驱动，而非仅由封装数量驱动。",
        research: "适合材料、射频、电气和机械方向；可研究介电损耗、铜粗糙度、通孔可靠性与玻璃加工。"
      },
      case: { title: "正确识别供应链层级", prompt: "一家材料公司销售用于 CPU 积层封装基板层间绝缘的薄膜。", answer: "它供应 ABF 类介电材料，而不是完整基板", reasoning: "完整基板还需要核心、铜线路、通孔、表面处理与多层制造。" },
      sources: ["ajinomotoAbf", "intelGlass", "intelAssembly"],
      takeaway: "基板是多层系统，ABF 是积层绝缘材料，玻璃芯是核心材料路线；三者不能当成同一产品比较。"
    },
    "0016": {
      title: "CoWoS-S、R、L 的结构差异",
      lede: "CoWoS 是一组 2.5D 平台而不是单一剖面。S、R、L 的关键差异，在于高密度硅和 RDL 覆盖多大区域、怎样组合。",
      win: "能把 CoWoS-S、R、L 分别翻译成整片硅中介层、RDL 中介层、RDL 加局部硅互连。",
      modelTitle: "把品牌名翻译成材料与覆盖范围",
      steps: [
        { title: "CoWoS-S", body: "逻辑与 HBM 位于大面积硅中介层上，获得广范围高密度布线和嵌入电容能力。", source: "tsmcCowos" },
        { title: "CoWoS-R", body: "使用聚合物与铜走线构成 RDL interposer，强调柔性、扩展和信号/电源布线。", source: "tsmcCowos" },
        { title: "CoWoS-L", body: "以模塑/RDL 平台承载整体互连，在需要处嵌入 LSI 提供高密度局部连接。", source: "tsmcCowos" },
        { title: "共同目标", body: "整合多个逻辑 die 与 HBM，在性能、面积、成本、供电和制造之间取舍。", source: "tsmcAnnual" }
      ],
      ideas: [
        { tag: "S", title: "整片硅覆盖范围大", body: "适合大量高密度互连，但硅中介层尺寸、制造和封装良率必须一起考虑。" },
        { tag: "R", title: "RDL 改变材料系统", body: "聚合物—铜平台具有不同线宽、损耗、柔性、翘曲与工艺能力。" },
        { tag: "L", title: "局部精细 + 全局扩展", body: "把最密线路集中到 LSI，其余使用较宽 RDL，是典型的分层互连思想。" }
      ],
      lenses: {
        engineering: "选择路线时比较所需互连密度分布、封装尺寸、供电、HBM 数量和机械边界。",
        investment: "不要把所有 CoWoS 产能视为完全可互换；不同路线涉及不同中介层、RDL、材料、设备与良率结构。",
        research: "可研究局部/全局互连分配、RDL 损耗、硅面积优化、eDTC 和大尺寸翘曲。"
      },
      case: { title: "识别混合路线", prompt: "一个大尺寸封装主要由模塑 RDL 平台扩展，只在 GPU 与 HBM 边界嵌入高密度硅互连。", answer: "结构上最接近 CoWoS-L 思路", reasoning: "它不是整片硅，也不是纯 RDL，而是全局 RDL 与局部高密度硅的组合。" },
      sources: ["tsmcCowos", "tsmcAnnual"],
      takeaway: "S 是整片硅，R 是 RDL，L 是 RDL 与局部硅互连组合；名称背后是高密度材料覆盖范围的选择。"
    },
    "0017": {
      title: "InFO 与 Fan-out 怎样重构封装",
      lede: "Fan-out 不要求所有 I/O 都停留在原 die 面积内。它先把 die 放入重构载体，再用 RDL 向外扇出端口，从而获得更大的布线和焊球区域。",
      win: "能解释 fan-out 的重构、RDL 和端口扩展逻辑，并与传统基板和硅中介层区分。",
      modelTitle: "先重构，再重布线",
      steps: [
        { title: "挑选 die", body: "已切割并测试的 die 被重新排列到临时载体上。", source: "tsmcInfo" },
        { title: "形成重构体", body: "模塑材料包围 die，形成新的 wafer 或 panel 形态。" },
        { title: "制作 RDL", body: "在重构表面制作介电层、铜线路和过孔，把端口向外扩展。", source: "tsmcInfo" },
        { title: "切割与系统集成", body: "形成单 die、多 die、PoP 或 on-substrate 等不同 fan-out 产品。", source: "tsmc3d" }
      ],
      ideas: [
        { tag: "FAN", title: "I/O 可以超出 die 轮廓", body: "这为更多焊球、更宽布线和多 die 连接提供空间。" },
        { tag: "RDL", title: "RDL 是核心互连", body: "线宽、层数、介电损耗、铜厚和重构翘曲决定性能与制造难度。" },
        { tag: "FORM", title: "Fan-out 是一族方案", body: "Wafer-level、panel-level、PoP 和 on-substrate 的成本与应用边界不同，不能只凭 fan-out 名称判断。" }
      ],
      lenses: {
        engineering: "检查 die shift、模塑翘曲、RDL 对准、线宽间距、封装尺寸和热路径。",
        investment: "面板化可能提高面积利用率，但设备、材料、翘曲、良率与客户认证决定真实成本优势。",
        research: "适合制造、材料和机械方向；可研究重构形变、RDL 可靠性、面板均匀性和补偿算法。"
      },
      case: { title: "识别 fan-out 的必要线索", prompt: "die 被嵌入模塑重构载体，随后在其表面制作多层铜 RDL，并把焊球扩展到 die 外。", answer: "这是典型 fan-out 流程", reasoning: "关键证据是重构载体与 I/O 向 die 外扇出，而不是产品最终是否还安装到基板。" },
      sources: ["tsmcInfo", "tsmc3d", "asmpt"],
      takeaway: "Fan-out 的核心是重构 die + 制作 RDL + 向外扩展 I/O；它是一种封装方法族，不是一条单一性能等级。"
    },
    "0018": {
      title: "EMIB 与 Foveros 的技术地图",
      lede: "Intel 的商业名称覆盖不同空间结构。EMIB 把小块硅桥嵌入基板连接相邻 die；Foveros 技术族覆盖硅/RDL 中介层和直接 3D 堆叠。",
      win: "能把 EMIB 与 Foveros 翻译成局部横向互连、2.5D 中介层或 3D 垂直堆叠，而不把品牌名当维度。",
      modelTitle: "先看横向桥，再看垂直堆叠",
      steps: [
        { title: "EMIB 2.5D", body: "小块硅桥嵌入封装基板，只在 die 相邻边缘提供高密度连接。", source: "intelPackaging" },
        { title: "EMIB-M / T", body: "在桥中加入 MIM 电容或 TSV，强化局部供电能力。", source: "intelPackaging" },
        { title: "Foveros 2.5D", body: "可使用硅或 RDL interposer 承载多个 top die。", source: "intelPackaging" },
        { title: "Foveros Direct / 3.5D", body: "Hybrid bonding 垂直堆叠，并可与 EMIB 横向连接组合。", source: "intelPackaging" }
      ],
      ideas: [
        { tag: "LOCAL", title: "EMIB 把硅放在关键边界", body: "其余电源和 I/O 可直接进入有机基板，避免所有路径都穿过整片硅。" },
        { tag: "FAMILY", title: "Foveros 不是单一剖面", body: "看到名称后仍需确认是 2.5D interposer、active base 还是 direct 3D。" },
        { tag: "MIX", title: "横向与垂直可以组合", body: "复杂系统可把若干 3D stack 再用 EMIB 横向互连，因此出现 3.5D 的商业描述。" }
      ],
      lenses: {
        engineering: "按 die 边界、堆叠方向、供电路径和硅覆盖面积分解方案。",
        investment: "技术名对应的设备和材料需求并不固定，必须确认具体产品版本、量产状态和客户结构。",
        research: "可研究局部桥的信号/供电、active base 网络、混合键合和 2.5D+3D 拓扑优化。"
      },
      case: { title: "把商业名还原成结构", prompt: "两个 3D compute stack 之间通过封装基板中的小硅桥连接。", answer: "这是垂直 Foveros 与横向 EMIB 的组合", reasoning: "同一产品同时存在垂直和横向两种集成方式，不能只选一个标签。" },
      sources: ["intelPackaging", "intelPower"],
      takeaway: "EMIB 是局部横向硅桥；Foveros 是 2.5D/3D 技术族；复杂产品可把二者组合。"
    },
    "0019": {
      title: "UCIe 标准化了什么",
      lede: "UCIe 的目标不是制造所有 chiplet，而是定义封装内 die-to-die 连接的共同接口，让物理层、协议、管理、测试和软件模型更可互操作。",
      win: "能说出 UCIe 解决的层级，以及它没有自动解决的封装与商业问题。",
      modelTitle: "从导线到软件的接口栈",
      steps: [
        { title: "Package channel", body: "定义标准封装与先进封装下的物理连接、电气参数和 bump map。", source: "ucie" },
        { title: "PHY + Adapter", body: "完成链路训练、可靠传输、错误处理与协议适配。", source: "ucie" },
        { title: "Protocols", body: "可承载 PCIe、CXL 或 streaming/raw 等不同流量。", source: "ucie" },
        { title: "Management / DFx", body: "新版本加入管理、测试、遥测、调试和 3D 支持。", source: "ucie" }
      ],
      ideas: [
        { tag: "OPEN", title: "标准降低接口重复开发", body: "共同规范有助于多供应商生态，但实际产品仍需要一致的版本、能力和认证。" },
        { tag: "PHYS", title: "标准不能消除物理约束", body: "封装 pitch、线路损耗、供电、热、机械与测试仍需具体实现。" },
        { tag: "BIZ", title: "互操作不等于可随意替换", body: "IP、性能目标、可靠性、供应关系、责任边界和软件验证仍会形成切换成本。" }
      ],
      lenses: {
        engineering: "检查速率、lane 数、封装类型、协议、延迟、错误恢复、测试与版本兼容。",
        investment: "开放标准可能扩大生态，也可能降低专有接口壁垒；真正价值取决于 IP、验证、封装和客户采纳。",
        research: "适合数字通信、计算机体系结构和测试方向；可研究链路、NoC、可靠性与资源管理。"
      },
      case: { title: "识别标准的边界", prompt: "两颗 chiplet 都声称支持 UCIe，但 bump pitch、封装通道和协议能力不一致。", answer: "不能仅凭“支持 UCIe”认定可直接组合", reasoning: "必须核对标准版本、物理封装、电气能力、协议配置、管理与合规测试。" },
      sources: ["ucie", "intelPackaging"],
      takeaway: "UCIe 标准化接口栈和管理测试，不会自动解决制造、封装、供电、热和商业责任边界。"
    },
    "0020": {
      title: "HBM 代际升级到底升级什么",
      lede: "HBM 的代际升级不只是单一速度数字。总线宽度、每 pin 速率、堆叠层数、容量、base die、功耗、热、封装接口和客户验证共同决定系统价值。",
      win: "能把 HBM 规格分成带宽、容量、能效、制造与系统集成五类，而不只比较代际名称。",
      modelTitle: "从单个 pin 到整套 AI 系统",
      formula: "单堆栈带宽 ≈ I/O 宽度 × 单 pin 数据率",
      steps: [
        { title: "接口宽度", body: "更宽的总线直接增加并行数据路径；HBM4 进一步扩大接口宽度。", source: "micronHbm4" },
        { title: "单 pin 速率", body: "更快信号提高带宽，也增加信号完整性、功耗和封装验证难度。" },
        { title: "容量与层数", body: "更多 DRAM die 和更高单 die 容量提高每 stack 容量，但加重薄化、堆叠、热与良率约束。", source: "micronHbm" },
        { title: "Base die + package", body: "Base die、PHY、CoWoS/其他平台、GPU 控制器和系统软件共同决定实际表现。" }
      ],
      ideas: [
        { tag: "SPEC", title: "带宽不等于容量", body: "带宽表示每秒传多少，容量表示能存多少；AI 工作负载可能同时受二者限制。" },
        { tag: "YIELD", title: "规格必须穿过量产良率", body: "层数、接口和 base die 越复杂，越要核对成熟良率、客户认证与稳定供货。" },
        { tag: "SNAP", title: "代际信息要标日期", body: "本课规格状态以 2026-08 为快照；投资研究必须重新核对厂商和标准披露。", source: "micronHbm4" }
      ],
      lenses: {
        engineering: "用带宽、容量、pJ/bit、温度、堆叠高度、接口宽度和 base die 工艺共同比较。",
        investment: "关注 qualified supply、良率、客户组合、长期协议、产能机会成本和封装配套，而不只看名义需求。",
        research: "可研究 DRAM—base die 协同、热、测试、信号、功耗和系统数据流。"
      },
      case: { title: "拆解“带宽翻倍”", prompt: "新一代 HBM 宣称单 stack 带宽显著提高。", answer: "先拆成总线宽度与单 pin 速率，再检查系统边界", reasoning: "还需核对容量、功耗、温度、控制器、封装、良率和客户工作负载，才能判断实际价值。" },
      sources: ["micronHbm4", "micronHbm", "tsmcAnnual"],
      takeaway: "HBM 代际升级是接口、速度、容量、base die、能效、热与封装的共同升级；任何单一数字都不完整。"
    },
    "0021": {
      title: "高速互连的信号完整性",
      lede: "数字信号在逻辑上是 0 和 1，在封装里却是会衰减、反射、串扰和抖动的模拟波形。信号完整性的目标，是让接收器仍有足够判读裕量。",
      win: "能用损耗、反射、串扰和眼图裕量描述高速链路风险。",
      modelTitle: "一个 bit 到达接收端前经历什么",
      steps: [
        { title: "驱动", body: "发送端产生具有有限上升时间的电压/电流波形。" },
        { title: "传播", body: "线路电阻、介质损耗和频率效应削弱高频成分。", source: "tsmcInterconnect" },
        { title: "干扰", body: "阻抗不连续产生反射，相邻线耦合产生串扰，时钟与电源噪声增加抖动。" },
        { title: "判读", body: "接收端在指定时刻和门限采样，剩余的时间/电压空间形成 eye margin。" }
      ],
      ideas: [
        { tag: "LOSS", title: "更短通常更好，但不保证", body: "一个短链路若有严重阻抗突变、过孔残桩或连接缺陷，仍可能比更长但连续的链路差。" },
        { tag: "XTALK", title: "密度会增加耦合", body: "线路更密可提高带宽密度，也可能增加串扰，需要间距、屏蔽、层叠与编码共同解决。" },
        { tag: "EYE", title: "眼图是结果压缩", body: "眼图把许多 bit 的波形叠加，眼口越小，接收容错空间越少。" }
      ],
      lenses: {
        engineering: "用插入损耗、回波损耗、串扰、抖动、BER 和 eye margin 验证链路。",
        investment: "更高速接口会推动低损耗材料、仿真、量测和测试需求，但规格提升不等于所有供应商同步受益。",
        research: "适合电磁场、微波、传输线、通信和封装协同方向；需要电路与信号基础。"
      },
      case: { title: "不要只用长度诊断", prompt: "一条很短的 die-to-die 链路误码率异常，而较长链路工作正常。", answer: "检查阻抗不连续、串扰、供电噪声和连接缺陷", reasoning: "长度只是影响因素之一；接口、过孔、凸点、回流路径和参考平面同样决定信号质量。" },
      sources: ["tsmcInterconnect", "ucie", "ieeeHir"],
      takeaway: "信号完整性关注接收端能否正确判读；链路短是优势，但损耗、反射、串扰、抖动和连接质量共同决定结果。"
    },
    "0022": {
      title: "供电完整性与 PDN 阻抗",
      lede: "第九课用 IR drop 建立直觉；更深入时，PDN 需要被看成随频率变化的网络。不同位置和类型的电容负责不同时间尺度的电流需求。",
      win: "能解释为什么只增加总电容量不一定解决 voltage droop，以及为什么电容必须分层放置。",
      modelTitle: "从慢变化到快速瞬态",
      steps: [
        { title: "VRM", body: "提供持续能量并处理较慢的负载变化，但离晶体管较远。" },
        { title: "板级/封装电容", body: "承担中低频能量缓冲，容量较大但路径寄生也较大。" },
        { title: "近 die 电容", body: "MIM/eDTC 等靠近负载，快速提供瞬态电流。", source: "intelPower" },
        { title: "On-die PDN", body: "最后通过片上网格把电流分配到局部晶体管，同时受拥塞和电迁移限制。", source: "imecPower" }
      ],
      ideas: [
        { tag: "Z", title: "阻抗随频率变化", body: "电阻、电感和电容共同构成 PDN；同一个网络在不同频率下表现不同。" },
        { tag: "ESL", title: "电容也有寄生参数", body: "电容离负载越远、连接越长，寄生电感越大，越难响应最快的电流变化。" },
        { tag: "RES", title: "电容组合可能产生共振", body: "多级电容和封装结构需要阻尼与布局设计，不能只追求最大总容量。" }
      ],
      lenses: {
        engineering: "建立目标阻抗与频率范围，联合优化 VRM、主板、基板、凸点、TSV 和 on-die grid。",
        investment: "高密度电容、先进基板和供电模块的机会要结合每个平台用量、客户自研和集成位置。",
        research: "适合电路、电磁、材料与封装方向；可做阻抗扫描、瞬态仿真和电源噪声测量。"
      },
      case: { title: "总容量相同，位置不同", prompt: "方案 A 把电容全部放在主板远处；方案 B 把一部分高密度电容放在 die 附近。总容量相同。", answer: "方案 B 通常更能处理最快瞬态", reasoning: "近端电容连接电感更小，能更快向负载供电；远端电容仍有价值，但负责的频率范围不同。" },
      sources: ["intelPower", "imecPower", "tsmcCowos"],
      takeaway: "PDN 是频率相关网络；电容的容量、位置和寄生参数同样重要，近端小水箱负责最快瞬态。"
    },
    "0023": {
      title: "热点、边界条件与热模型",
      lede: "同一个芯片在不同散热器、风量、冷板温度或相邻 die 布局下会得到完全不同温度。热模型最容易犯的错误，是比较结果却没有统一边界条件。",
      win: "能为热分析明确热源、材料与界面、几何、冷却边界和验证数据。",
      modelTitle: "一个可信热模型的五层输入",
      steps: [
        { title: "功耗地图", body: "不是只有总 TDP，还要知道功耗在 die 上如何分布、随工作负载怎样变化。", source: "imecThermal" },
        { title: "几何与材料", body: "输入 die、TIM、lid、中介层、基板的厚度与导热属性。" },
        { title: "界面热阻", body: "固体接触面、键合层和 TIM 可能贡献显著温差。", source: "ieeeThermal" },
        { title: "冷却边界", body: "定义散热器、冷板温度、对流系数或流体条件。" }
      ],
      ideas: [
        { tag: "MAP", title: "热点比平均值更危险", body: "局部温度决定节流、漏电、互连寿命和相邻 die 热耦合。" },
        { tag: "BOUND", title: "边界决定答案", body: "没有统一冷却边界的两个温度数字不能直接比较。" },
        { tag: "VALID", title: "仿真必须校准", body: "用热传感器、红外、热测试芯片或已知结构验证模型，避免漂亮但错误的温度云图。" }
      ],
      lenses: {
        engineering: "从稳态与瞬态两类问题出发，报告峰值温度、温差、热阻和冷却条件。",
        investment: "散热方案价值取决于系统功率密度与冷却边界，不能仅用芯片标称 TDP 推算。",
        research: "适合机械、材料和计算方向；需要热传导、数值方法、实验校准与不确定性分析。"
      },
      case: { title: "拒绝无边界比较", prompt: "报告 A 称封装峰温 80°C，报告 B 称 90°C，但二者使用不同冷板温度和功耗地图。", answer: "不能据此判断 A 的封装热设计更好", reasoning: "必须统一热源、几何、材料、界面和冷却边界，或换算到可比较的热阻指标。" },
      sources: ["imecThermal", "ieeeThermal", "intelResearch"],
      takeaway: "可信热分析必须同时定义功耗地图、材料几何、界面和冷却边界，并用独立测量校准。"
    },
    "0024": {
      title: "翘曲、疲劳与机械可靠性",
      lede: "第十课解释了一次温度变化如何产生应力；可靠性研究进一步关注反复循环、局部应力集中、材料老化和失效概率。",
      win: "能把机械可靠性拆成载荷、材料与几何、局部响应、循环累积和失效判据。",
      modelTitle: "从一次变形到寿命问题",
      steps: [
        { title: "载荷历史", body: "回流焊、开关机、环境温度、机械弯曲和跌落形成不同载荷谱。", source: "ieeeHir" },
        { title: "结构响应", body: "CTE、模量、厚度和几何决定整体翘曲与局部应变。" },
        { title: "循环累积", body: "焊点、铜互连和界面在反复载荷下出现塑性与疲劳损伤。" },
        { title: "失效与分布", body: "寿命具有离散性，需要样品、统计模型和失效分析共同判断。" }
      ],
      ideas: [
        { tag: "LOCAL", title: "整体平整不代表局部安全", body: "封装总体翘曲较小，角部焊点或材料界面仍可能存在高应力集中。" },
        { tag: "CYCLE", title: "峰值不是全部", body: "可靠性取决于幅度、平均温度、停留时间、循环次数和材料随时间变化。" },
        { tag: "FAIL", title: "必须做失效分析", body: "测试失败后要定位裂纹、分层、空洞或电迁移证据，才能更新设计与模型。" }
      ],
      lenses: {
        engineering: "用结构仿真、热循环、截面、声学扫描、X-ray 和电性监控闭环验证。",
        investment: "可靠性是认证壁垒来源，但验证周期长；研发投入与客户黏性可能同时上升。",
        research: "适合机械、材料和统计方向；可研究疲劳模型、界面断裂、加速试验和寿命外推。"
      },
      case: { title: "避免只看平均应力", prompt: "仿真显示封装平均应力不高，但热循环后总是角部微凸点先失效。", answer: "检查局部应力集中与循环塑性应变", reasoning: "疲劳通常由局部最危险位置主导，平均值会掩盖角部几何和材料不连续。" },
      sources: ["ieeeHir", "ieeeThermal", "tsmcCowos"],
      takeaway: "机械可靠性是载荷历史、材料几何、局部响应和统计寿命的共同结果；平均值不能替代热点分析。"
    },
    "0025": {
      title: "DFT、测试覆盖与缺陷逃逸",
      lede: "测试设备只能观察设计暴露出来的行为。DFT 把控制点、观察点、自测试、环回和管理网络设计进 chiplet 与封装，让缺陷更容易被发现和定位。",
      win: "能区分可测性、覆盖率、缺陷逃逸与过度测试，并理解 UCIe 管理/DFx 的作用。",
      modelTitle: "一个缺陷如何被测试发现",
      steps: [
        { title: "激活缺陷", body: "测试向目标结构施加能让故障表现出来的模式。" },
        { title: "传播影响", body: "故障结果必须经过逻辑、链路或传感器传播到可观察位置。" },
        { title: "观察与比较", body: "ATE、BIST、loopback 或系统遥测将结果与预期行为比较。", source: "ieeeTest" },
        { title: "诊断与处置", body: "定位 die、链路或工序，决定报废、降级、重测或修复。", source: "ucie" }
      ],
      ideas: [
        { tag: "DFT", title: "可测性必须预先设计", body: "封装完成后再发现内部节点不可控、不可观察，通常无法靠增加外部测试补救。" },
        { tag: "ESCAPE", title: "漏检代价随价值累积", body: "缺陷逃到客户或系统阶段，可能带来整机停机、召回和声誉损失。" },
        { tag: "OVER", title: "测试也有成本", body: "过长测试时间、过严 guardband 和重复测试会降低吞吐与良率，需要风险优化。" }
      ],
      lenses: {
        engineering: "为 die、D2D link、HBM、供电热传感器和系统功能建立分层测试架构。",
        investment: "测试时间和复杂度可增加设备需求，但压缩算法、并行度和客户自测会改变收入敏感性。",
        research: "适合数字电路、可靠性、数据分析与 AI 诊断；可研究故障模型、自适应测试和 in-field repair。"
      },
      case: { title: "覆盖率不是通过率", prompt: "一批产品测试通过率很高，但客户仍发现某类内部 D2D 间歇故障。", answer: "优先检查故障模型、激活条件与观察路径", reasoning: "高通过率可能只是测试没有覆盖目标缺陷；需要新的 DFT、应力条件或系统遥测。" },
      sources: ["ieeeTest", "ucie", "intelPackaging"],
      takeaway: "测试覆盖的本质是激活、传播、观察和诊断；DFT 决定内部缺陷能否在价值累积前被抓住。"
    },
    "0026": {
      title: "为什么必须做系统—技术协同优化",
      lede: "更细的互连、更多 HBM、更低电压和更大封装不会独立发生。STCO 把工作负载、架构、die、封装、主板、供电与冷却放进同一优化循环。",
      win: "能识别局部最优如何伤害系统，并用共同目标函数组织跨学科取舍。",
      modelTitle: "从工作负载向下，再从物理边界向上",
      steps: [
        { title: "工作负载", body: "确定计算、容量、带宽、延迟、可靠性和成本目标。" },
        { title: "架构分配", body: "选择 monolithic/chiplet、缓存、HBM、I/O 与 die 划分。", source: "tsmc3d" },
        { title: "物理实现", body: "确定制程节点、封装拓扑、互连、供电、热和机械方案。", source: "intelResearch" },
        { title: "闭环验证", body: "用性能、功耗、温度、良率、成本和上市时间共同评估并迭代。", source: "imecThermal" }
      ],
      ideas: [
        { tag: "LOCAL", title: "单项最优可能伤害整体", body: "极细互连可能提高带宽，却增加制造难度、成本、热流密度和测试复杂度。" },
        { tag: "BOUND", title: "约束必须共享", body: "电气、热、机械和制造团队若使用不同几何或功耗假设，结果无法合并。" },
        { tag: "OBJ", title: "目标函数不只性能", body: "实际产品同时优化性能、功耗、面积、成本、可靠性、产能和上市时间。" }
      ],
      lenses: {
        engineering: "建立同一封装数据库和跨域模型，用系统指标决定局部设计，而不是团队各自最大化。",
        investment: "系统级能力和生态协同可能比单点规格更难复制；评估公司时看整合与交付，不只看实验室纪录。",
        research: "适合跨学科方向；可做 surrogate model、多目标优化、设计空间探索和模型不确定性。"
      },
      case: { title: "识别局部最优", prompt: "互连团队把 lane 数翻倍，带宽提高，但封装面积、I/O 功耗、PDN 噪声和测试时间显著上升。", answer: "需要回到系统目标重新做多目标权衡", reasoning: "带宽提升只有在工作负载实际受益且其他约束可承受时才是系统优化。" },
      sources: ["tsmc3d", "intelResearch", "imecThermal", "ieeeHir"],
      takeaway: "STCO 以系统目标统领架构、芯片与封装；先进封装真正的壁垒往往来自跨域闭环，而不是单点纪录。"
    },
    "0027": {
      title: "先进封装设备与工艺地图",
      lede: "同一个 TSV、RDL 或 hybrid bond 需要多类设备连续工作。投资研究应从工艺步骤映射设备，而不是看到“先进封装”就把所有设备需求同时上调。",
      win: "能把主要工艺步骤对应到设备功能，并理解重复次数、吞吐和良率对设备需求的影响。",
      modelTitle: "从图形到连接的设备链",
      steps: [
        { title: "图形与刻蚀", body: "光刻定义 RDL、凸点和 TSV 图形，刻蚀形成介质开口与深孔。", source: "appliedPackaging" },
        { title: "沉积与电镀", body: "PVD/CVD 形成阻挡、种子和介质层，ECD 填充铜 TSV、RDL 和凸点。", source: "appliedPackaging" },
        { title: "平坦化与切割", body: "CMP 控制表面与铜形貌，减薄、激光和锯切准备 die。", source: "asmpt" },
        { title: "贴装、键合与检测", body: "高精度放置、TCB/hybrid bonding、塑封、量测和测试形成最终产品。", source: "asmpt" }
      ],
      ideas: [
        { tag: "LOOP", title: "同类设备可能重复多次", body: "多层 RDL 会重复涂布、曝光、显影、沉积、电镀和检查，因此层数会影响设备强度。" },
        { tag: "UPH", title: "精度常以吞吐为代价", body: "更慢的键合、量测或检测步骤可能成为整条线瓶颈。" },
        { tag: "MIX", title: "产品组合改变工具需求", body: "硅中介层、fan-out、HBM 堆叠和 hybrid bonding 使用的设备集合与重复次数不同。" }
      ],
      lenses: {
        engineering: "用 process of record 列出每一步设备、关键参数、节拍、缺陷和反馈控制。",
        investment: "把设备收入拆成新建产线、技术升级、重复层数、备件服务与替换周期。",
        research: "适合制造、自动化和设备方向；可研究工艺控制、在线量测、缺陷检测与 throughput 优化。"
      },
      case: { title: "避免设备需求一刀切", prompt: "某封装路线从整片硅中介层转向 RDL + 局部硅桥。", answer: "重新计算各工艺步骤与重复次数", reasoning: "硅加工、RDL、基板嵌入、贴装和测试的需求会重新分配，并非所有设备同比例增加或减少。" },
      sources: ["appliedPackaging", "asmpt", "intelAssembly"],
      takeaway: "设备需求来自具体工艺步骤 × 重复次数 × 吞吐 × 良率；产品名称只是起点。"
    },
    "0028": {
      title: "封装材料的六类功能",
      lede: "封装材料不是一张供应商名单。先按导电、绝缘、键合、机械保护、热传导和结构承载六类功能理解，再比较材料属性与工艺窗口。",
      win: "能把铜、介质、焊料、underfill、mold、TIM 和基板材料放到正确功能层级。",
      modelTitle: "材料沿三条路径工作",
      steps: [
        { title: "电路径", body: "铜、焊料、凸点和 TSV 传输信号与电源；介质提供绝缘和阻抗控制。", source: "ajinomotoAbf" },
        { title: "热路径", body: "硅、TIM、盖板和散热结构把热量从 hotspot 传向冷却边界。", source: "intelAssembly" },
        { title: "力路径", body: "基板、underfill、mold 和 lid 承载、分配应力并保护微小连接。" },
        { title: "界面路径", body: "粘附、润湿、表面氧化、污染和粗糙度决定不同材料能否长期结合。", source: "ieeeHir" }
      ],
      ideas: [
        { tag: "DIEL", title: "介电常数与损耗影响高速信号", body: "材料既要可制造和可靠，也要满足阻抗、损耗、吸湿与耐热要求。" },
        { tag: "MECH", title: "刚度与 CTE 是双刃剑", body: "提高刚度可能减小整体翘曲，也可能把应力转移到脆弱界面。" },
        { tag: "INT", title: "界面常比主体先失效", body: "材料本体性能优秀，若表面处理、清洁或粘附不足，仍会出现分层和空洞。" }
      ],
      lenses: {
        engineering: "建立 property—process—reliability 表，覆盖电、热、机械、吸湿、老化和可加工性。",
        investment: "评估材料公司要看配方认证、客户切换时间、单位面积用量、良率贡献和下一代适配。",
        research: "适合材料、化学和界面科学方向；可研究介电、扩散、粘附、热老化和多物理失效。"
      },
      case: { title: "从功能而不是名称选择材料", prompt: "一种新介质的电损耗更低，但吸湿后尺寸变化和粘附明显变差。", answer: "不能只凭低损耗认定更优", reasoning: "封装材料必须同时满足电气、机械、环境可靠性和制造工艺窗口。" },
      sources: ["ajinomotoAbf", "intelGlass", "intelAssembly", "ieeeHir"],
      takeaway: "封装材料同时参与电、热、力和界面路径；任何单一优秀属性都必须通过工艺与可靠性验证。"
    },
    "0029": {
      title: "产能、吞吐、稼动与良率",
      lede: "“新增十台设备”不是完整产能结论。有效合格输出还取决于单机吞吐、可运行时间、产品组合、返工、良率和客户资格。",
      win: "能用一个透明模型把物理设备数转换为合格产出，并指出模型最可能失真的地方。",
      modelTitle: "从名义工具数到合格产出",
      formula: "合格输出 ≈ 工具数 × 单机吞吐 × 时间 × Uptime × Yield",
      steps: [
        { title: "工具与节拍", body: "确认关键工序工具数量、每小时单位数和产品配方切换损失。", source: "asmpt" },
        { title: "可用与占用", body: "区分设备 uptime、实际 utilization、维护、工程批次和停机。" },
        { title: "良率与返工", body: "过程良率、assembly yield、final yield 和返工会改变可交付数量。" },
        { title: "认证边界", body: "只有通过特定客户与产品认证的能力，才是可商业交付的 qualified capacity。", source: "tsmcAnnual" }
      ],
      ideas: [
        { tag: "MIX", title: "产品组合改变吞吐", body: "不同封装尺寸、RDL 层数、HBM 数量和测试时长会占用不同机时。" },
        { tag: "BOT", title: "最慢环节限制整线", body: "前后段设备很多，但最终 throughput 由当前瓶颈与在制品平衡决定。" },
        { tag: "RAMP", title: "新产线不会瞬间满产", body: "安装、调试、客户认证和良率爬坡造成物理产能与财务产出之间的时滞。" }
      ],
      lenses: {
        engineering: "用每一步 cycle time、WIP、设备故障和良率建立离散事件或瓶颈模型。",
        investment: "把扩产公告拆成到厂、安装、认证、爬坡和满产五个里程碑，避免把 CapEx 当即期收入。",
        research: "适合工业工程、统计与运筹方向；可研究排产、OEE、yield learning 和不确定需求。"
      },
      case: { title: "新增非瓶颈设备", prompt: "RDL 电镀设备增加 50%，但整线真正瓶颈是低吞吐的精密键合，而且后者没有扩充。", answer: "最终封装产能不会因此增加 50%", reasoning: "电镀排队会缓解，但系统输出仍受键合节拍限制；需要重新平衡整条产线。" },
      sources: ["asmpt", "appliedPackaging", "tsmcAnnual"],
      takeaway: "有效产能不是工具数，而是工具、吞吐、时间、稼动、良率、产品组合和认证共同决定的合格输出。"
    },
    "0030": {
      title: "每颗合格封装的成本模型",
      lede: "先进封装的正确比较对象不是“封装步骤多少钱”，而是交付一颗满足规格的合格系统需要消耗多少 die、材料、设备时间、测试与良率损失。",
      win: "能建立 cost per good package 模型，并解释 chiplet 何时省钱、何时把成本转移到封装与测试。",
      modelTitle: "总投入如何摊到合格产品",
      formula: "单位合格成本 = 总 die + 互连/基板 + 组装 + 测试 + 良率损失 + 折旧/间接成本",
      steps: [
        { title: "Die 成本", body: "考虑各节点晶圆成本、die 面积、单 die 良率、KGD 测试与备用数量。", source: "amdChiplet" },
        { title: "Package BOM", body: "加入 interposer/bridge、substrate、HBM、凸点、underfill、mold、TIM 和 lid。" },
        { title: "Process + test", body: "按设备时间、重复层数、组装、量测、burn-in 和系统测试计入。", source: "intelAssembly" },
        { title: "Compound yield", body: "把各关键步骤良率和返工边界组合，除以最终合格数量。", source: "ieeeTest" }
      ],
      ideas: [
        { tag: "GOOD", title: "分母必须是合格产品", body: "名义投入低但最终良率差，单位合格成本可能更高。" },
        { tag: "NODE", title: "Chiplet 可优化节点分配", body: "数字逻辑迁移先进节点，模拟、I/O 或缓存留在成熟节点，可能改善面积与成本。" },
        { tag: "NRE", title: "量产成本之外还有 NRE", body: "Mask、IP、封装设计、验证和软件投入会随销量分摊，影响小批量产品经济性。" }
      ],
      lenses: {
        engineering: "对面积、良率、chiplet 数、attach yield、基板规格和测试时间做敏感性分析。",
        investment: "区分产品 ASP 上升与供应商利润上升；爬坡、折旧和低利用率可能暂时压低毛利。",
        research: "可建立参数化 cost/yield model，并用公开数据做区间和蒙特卡洛分析。"
      },
      case: { title: "避免只比较 die 良率", prompt: "Chiplet 方案的各小 die 良率更高，但需要昂贵 interposer、更多测试和多个高难度 attach。", answer: "必须比较最终每颗合格封装成本", reasoning: "单 die 良率优势可能被封装 BOM、assembly yield、测试和 NRE 部分抵消。" },
      sources: ["amdChiplet", "ieeeTest", "intelAssembly"],
      takeaway: "先进封装经济性必须以每颗合格系统为分母；chiplet 改善某些成本，也会新增互连、组装、测试和验证成本。"
    },
    "0031": {
      title: "瓶颈、认证与良率爬坡",
      lede: "产业新闻常把“需求旺盛”直接等同于“供给快速增加”。现实中，瓶颈会在中介层、HBM、基板、键合、测试、冷却和客户认证之间移动。",
      win: "能区分设备到位、工艺跑通、客户认证、良率爬坡和稳定量产五种状态。",
      modelTitle: "从需求到可交付收入的五道门",
      steps: [
        { title: "需求与设计", body: "客户产品必须完成架构、封装和供应链选择。" },
        { title: "物理能力", body: "厂房、公用工程、设备、材料与人员到位。" },
        { title: "工艺资格", body: "目标尺寸、层数、pitch 和材料组合达到内部规格。" },
        { title: "客户认证与爬坡", body: "样品、可靠性、系统验证和量产良率达到交付要求。", source: "tsmcAnnual" }
      ],
      ideas: [
        { tag: "MOVE", title: "瓶颈会移动", body: "扩充 CoWoS 后，HBM、ABF 基板、测试或冷却可能成为下一约束。" },
        { tag: "QUAL", title: "认证使产能具有客户属性", body: "一条线可生产某类封装，不代表立即能为所有客户和规格供货。" },
        { tag: "LEARN", title: "良率爬坡需要学习循环", body: "缺陷检测、失效分析、参数调整和供应商协同决定产能转化速度。" }
      ],
      lenses: {
        engineering: "用 constraint map 标出每个阶段的能力、缓冲、风险和转移条件。",
        investment: "建立里程碑时间线，分别跟踪设备、资格、客户验证、产量和毛利，而不是只统计厂房面积。",
        research: "适合工业工程、可靠性和数据科学；可研究 yield learning curve、故障诊断和产线仿真。"
      },
      case: { title: "正确解读扩产公告", prompt: "公司宣布新设备已经搬入工厂，但尚未完成客户样品与可靠性认证。", answer: "这是物理能力增加，不是全部商业产能已经可用", reasoning: "还需要调试、工艺资格、客户认证和良率爬坡才能转化为稳定合格出货。" },
      sources: ["tsmcAnnual", "amkorInvestor", "secEdgar"],
      takeaway: "商业可用产能要依次穿过设备、工艺、认证和良率；瓶颈解除后还会迁移到下一环节。"
    },
    "0032": {
      title: "先进封装价值链地图",
      lede: "AI 封装需求增长不会平均分配给所有公司。先画物料、设备、服务、知识产权和付款关系，才能判断谁的收入、利润和风险真正发生变化。",
      win: "能把先进封装拆成设计/IP、晶圆与存储、封装测试、基板材料、设备量测和系统冷却六层。",
      modelTitle: "从系统订单向上游追踪价值",
      steps: [
        { title: "系统与芯片设计", body: "决定加速器、HBM、chiplet、接口和冷却规格，并承担最终产品需求风险。" },
        { title: "Foundry + Memory", body: "制造逻辑、base die、HBM DRAM、interposer/LSI 等硅结构。", source: "tsmcAnnual" },
        { title: "Packaging + Test", body: "Foundry、IDM 或 OSAT 完成 RDL、基板、键合、组装和多级测试。", source: "amkorInvestor" },
        { title: "Materials + Equipment", body: "基板、ABF、铜、化学品、键合、沉积、量测和测试设备支撑产能。", source: "appliedPackaging" }
      ],
      ideas: [
        { tag: "PAY", title: "谁向谁付款", body: "价值链图要包含合同和采购关系，否则容易把同一价值量在多个环节重复计算。" },
        { tag: "CONTENT", title: "单位系统含量", body: "收入敏感性来自系统数量 × 技术采用率 × 每系统数量/面积/工时 × 单价。" },
        { tag: "RISK", title: "价值与风险一起传导", body: "稀缺环节可能获得价格和订单，也可能承担扩产、客户集中、技术替代与库存风险。" }
      ],
      lenses: {
        engineering: "用 BOM、process flow 和 responsibility matrix 标出每个环节的物理贡献与接口。",
        investment: "先计算可服务市场和单位含量，再评估份额、价格、毛利、CapEx 与现金回收。",
        research: "可结合产业组织、供应链网络和技术路线研究，分析瓶颈迁移与协同创新。"
      },
      case: { title: "避免重复计算价值量", prompt: "同一封装由 foundry 向客户总包交付，但部分组装外包给 OSAT。", answer: "分别记录总包收入与外包服务收入，不能把二者相加当终端封装价值", reasoning: "总包收入包含采购成本；需要沿付款关系消除价值链重复计算。" },
      sources: ["tsmcAnnual", "amkorInvestor", "appliedPackaging", "intelPackaging"],
      takeaway: "先进封装价值链必须同时画物理流程和付款关系；需求增长通过采用率、单位含量、份额和价格传导。"
    },
    "0033": {
      title: "投资研究的证据等级",
      lede: "高质量研究不是收集最多观点，而是让每个关键结论都能追溯到合适的一手来源，并明确区分事实、管理层主张、分析推断和未知项。",
      win: "能建立来源优先级，为技术、产能和财务结论标注日期、口径和证据强度。",
      modelTitle: "从定义到投资推断的证据链",
      steps: [
        { title: "标准与监管文件", body: "用标准定义接口，用 10-K/20-F/年报确认财务、风险和法定披露。", source: "secEdgar" },
        { title: "原始技术资料", body: "用论文、产品规格、路线图和专利确认结构、条件和实验结果。", source: "ieeeHir" },
        { title: "公司沟通", body: "财报会与演示提供管理层计划和判断，但需与实际结果交叉核对。" },
        { title: "二手分析", body: "新闻与研究报告用于发现问题和形成假设，关键事实回到原始出处。" }
      ],
      ideas: [
        { tag: "DATE", title: "所有变化快的信息标日期", body: "产能、客户、价格、标准版本和产品量产状态都需要时间戳。" },
        { tag: "SCOPE", title: "所有数字标口径", body: "说明是 wafer、package、stack、system，名义还是合格产能，收入还是订单。" },
        { tag: "LABEL", title: "事实、推断、主张分开写", body: "公司目标不是已实现事实；分析模型输出也不是公司披露。" }
      ],
      lenses: {
        engineering: "技术比较必须保留结构、测试条件、基线、样品量和限制。",
        investment: "为每个投资论点建立 evidence table，并记录下一次验证事件。",
        research: "训练文献检索、引用追踪、版本控制和可重复记录，是科研与投资共同能力。"
      },
      case: { title: "处理管理层目标", prompt: "公司演示称两年后先进封装收入将翻倍，但法定文件未提供订单和客户承诺。", answer: "把它记录为前瞻性管理层主张，而不是已确认事实", reasoning: "需要后续用 CapEx、设备到位、客户认证、季度收入和现金流逐步验证。" },
      sources: ["secEdgar", "tsmcAnnual", "ucie", "ieeeHir"],
      takeaway: "标准定义、法定披露确认、原始技术资料解释机制；管理层与二手来源用于形成假设，不能替代验证。"
    },
    "0034": {
      title: "把技术变量映射到财务报表",
      lede: "技术进步只有通过数量、价格、产品组合、良率、利用率和资本强度传导，才会出现在收入、毛利、现金流和资产负债表中。",
      win: "能把先进封装的工程变量映射到收入、毛利、CapEx、折旧、库存和营运资本。",
      modelTitle: "从物理变化到财务结果",
      formula: "收入 ≈ 出货量 × 单价；毛利还受良率、利用率、折旧与产品组合影响",
      steps: [
        { title: "需求与采用", body: "系统出货、attach rate、HBM 数量、封装面积和层数决定物理需求。" },
        { title: "产量与价格", body: "qualified capacity、利用率、良率、份额和定价转化为收入。" },
        { title: "成本与毛利", body: "材料、折旧、人工、返工、爬坡和低利用率共同影响单位成本。" },
        { title: "现金与资产", body: "CapEx 先形成在建工程和设备，随后折旧；库存和应收体现供需与交付节奏。", source: "secEdgar" }
      ],
      ideas: [
        { tag: "LAG", title: "CapEx 与收入之间有时滞", body: "建设、安装、认证和爬坡完成后，资产才可能转化为合格产出。" },
        { tag: "MIX", title: "收入增长不等于数量增长", body: "高规格产品占比、价格和服务内容变化也会推动收入。" },
        { tag: "GM", title: "爬坡期可能收入增、毛利降", body: "新技术早期良率、折旧和低利用率可能暂时抵消更高售价。" }
      ],
      lenses: {
        engineering: "把每项技术指标连接到 BOM、cycle time、yield、测试时间和 CapEx。",
        investment: "用 segment、footnote、cash flow 和 risk factor 验证管理层叙事，注意会计口径与合并范围。",
        research: "可建立 driver-based model 与敏感性分析，研究技术学习曲线对财务的非线性影响。"
      },
      case: { title: "解释收入与毛利背离", prompt: "新封装产品收入快速增长，但公司毛利率暂时下降。", answer: "检查爬坡良率、低利用率、折旧、外包与产品组合", reasoning: "高需求并不保证早期单位成本成熟；需要区分结构性低毛利和暂时爬坡成本。" },
      sources: ["secEdgar", "tsmcAnnual", "amkorInvestor"],
      takeaway: "技术变量通过数量、价格、良率、利用率和资本强度进入财务；收入、利润和现金流的时间路径可能不同。"
    },
    "0035": {
      title: "先进封装公司研究框架",
      lede: "一份可更新的公司研究，应从公司在价值链中的具体角色开始，依次验证产品、客户、技术壁垒、产能、单位经济、资本配置和风险。",
      win: "能用统一模板研究 foundry、OSAT、存储、基板、材料或设备公司，并避免跨公司错误比较。",
      modelTitle: "八栏公司研究卡",
      steps: [
        { title: "角色与产品", body: "公司卖什么、向谁收费、在完整 process flow 中负责哪一步。" },
        { title: "需求与客户", body: "终端驱动、客户集中、认证周期、合同形式和替代方案。" },
        { title: "能力与壁垒", body: "规格、良率、吞吐、installed base、IP、服务网络和复制时间。" },
        { title: "经济与风险", body: "收入驱动、毛利、CapEx、现金流、周期、库存、地缘和技术替代。", source: "secEdgar" }
      ],
      ideas: [
        { tag: "PEER", title: "同类公司才可直接比较", body: "材料、设备、OSAT 和 foundry 的收入确认、资本强度和周期完全不同。" },
        { tag: "MOAT", title: "壁垒要能被观测", body: "用认证时间、良率、客户切换、服务能力和复现难度验证“领先”。" },
        { tag: "TRIG", title: "写出验证与证伪事件", body: "每个论点都应有未来数据或事件可以支持或推翻。" }
      ],
      lenses: {
        engineering: "技术壁垒必须回到工艺窗口、量测、可靠性、系统协同和稳定量产。",
        investment: "建立 base/bull/bear 三种情景，公开数量、价格、份额、毛利和 CapEx 假设；不做无依据目标价。",
        research: "把公司技术主张转化为可测试问题，寻找论文、专利、标准和客户验证证据。"
      },
      case: { title: "识别不可验证的护城河", prompt: "公司称拥有“全球领先技术”，但没有说明规格、客户认证、良率或量产规模。", answer: "暂时记为待验证主张", reasoning: "需要找到具体指标、客户采用、专利/论文、设备交付或法定披露才能提高证据等级。" },
      sources: ["secEdgar", "tsmcAnnual", "amkorInvestor", "appliedPackaging"],
      takeaway: "公司研究从价值链角色开始，以产品、客户、能力、经济和风险闭环；所有壁垒都要落到可验证证据。"
    },
    "0036": {
      title: "AI 加速器封装案例拆解",
      lede: "一套典型 AI 加速器封装把逻辑、HBM、2.5D 互连、基板、供电、散热和测试放在一起。本课把前35课压缩成一张研究流程。",
      win: "能从系统需求向下拆结构，再从每个结构向上追踪产能、成本、风险与供应链。",
      modelTitle: "从工作负载到供应链的双向拆解",
      steps: [
        { title: "系统目标", body: "训练/推理工作负载决定算力、HBM 容量、带宽、互联和功耗目标。" },
        { title: "封装结构", body: "逻辑 die 与 HBM 通过硅/RDL/局部桥集成，再连接基板、供电和冷却。", source: "tsmcAnnual" },
        { title: "制造约束", body: "逻辑/HBM 良率、interposer/RDL、基板、键合、测试、翘曲和散热共同限制。", source: "micronHbm4" },
        { title: "产业传导", body: "系统数量 × 单机含量 × 采用率 × 份额 × 价格进入各供应商财务。" }
      ],
      ideas: [
        { tag: "SYSTEM", title: "性能由最紧约束决定", body: "计算、内存带宽、网络、供电或冷却任一不足，都可能限制整机利用率。" },
        { tag: "YIELD", title: "价值越高，早筛越重要", body: "昂贵逻辑、多个 HBM 和大封装组合后，KGD、组装良率和系统测试尤为关键。" },
        { tag: "CHAIN", title: "瓶颈与价值会移动", body: "HBM、CoWoS、基板、测试或冷却扩产速度不同，稀缺环节随时间变化。" }
      ],
      lenses: {
        engineering: "画一张完整剖面和 signal/power/heat/test 四条路径，再列每条路径的失效模式。",
        investment: "为每个环节建立数量、单位含量、产能、良率、份额和财务传导表，并按季度更新。",
        research: "从系统瓶颈选择一个可控问题，例如 HBM 热耦合、PDN、键合良率或测试诊断。"
      },
      case: { title: "选择真正的瓶颈", prompt: "GPU 晶圆供应充足，但 HBM 已认证供应、先进封装合格产能和冷却系统交付均受限。", answer: "系统出货由三者中最紧且最难替代的约束决定", reasoning: "单看 GPU 晶圆无法推导整机产量；应建立多约束时间线并持续更新。" },
      sources: ["tsmcAnnual", "micronHbm4", "intelPower", "ieeeTest"],
      takeaway: "AI 封装是算力、内存、互连、供电、热、良率、产能与商业关系的系统；研究必须沿完整因果链展开。"
    },
    "0037": {
      title: "大学专业与基础课程地图",
      lede: "先进封装不是一个单独专业，而是电子、材料、机械、制造与计算的交叉领域。选专业的关键不是哪个名字最接近“芯片”，而是你最想解决哪类变量。",
      win: "能把个人兴趣映射到专业方向，并形成数学、物理、化学、电路、热学、统计和编程的准备清单。",
      modelTitle: "用问题类型选择专业入口",
      steps: [
        { title: "电信号与供电", body: "偏 EE：电路、传输线、电磁、数字系统、器件与测试。", source: "mitCircuits" },
        { title: "材料与界面", body: "偏材料/化学：晶体、缺陷、扩散、介电、金属、聚合物与粘附。", source: "mitMaterials" },
        { title: "热与机械", body: "偏机械：导热、流体、应力、翘曲、疲劳和有限元。", source: "mitHeat" },
        { title: "制造与系统", body: "偏工业/制造/计算：工艺控制、统计、自动化、EDA、体系结构和数据分析。", source: "mitPython" }
      ],
      ideas: [
        { tag: "BASE", title: "共同底座先于专业标签", body: "代数、微积分、普通物理、基础化学、概率统计和编程会服务所有方向。" },
        { tag: "T", title: "建立 T 型能力", body: "选择一个主方向深入，同时保留理解其他团队语言的横向基础。" },
        { tag: "DO", title: "用项目检验兴趣", body: "做电路、热模型、材料文献或良率数据项目，比只看专业名称更能判断适合度。" }
      ],
      lenses: {
        engineering: "专业选择应对应你愿意长期处理的模型、实验仪器、数据和失效问题。",
        investment: "技术底座帮助识别企业能力，但大学阶段应优先建立可迁移的科学与工程能力。",
        research: "本科早期先完成基础课和小项目，再通过实验室、课程设计和论文逐步收敛研究方向。"
      },
      case: { title: "按问题而不是热词选择", prompt: "你最感兴趣的是封装翘曲、热应力和液冷，而不是晶体管电路设计。", answer: "机械工程或材料方向可能比纯芯片设计更匹配", reasoning: "仍需基础电路知识，但主线应强化热传递、固体力学、材料和数值仿真。" },
      sources: ["mitCircuits", "mitMaterials", "mitHeat", "mitStats", "mitPython"],
      takeaway: "先进封装横跨多个专业；选择入口时看自己最想研究的变量，再用共同理工底座和小项目验证。"
    },
    "0038": {
      title: "怎样读标准、论文、专利与产品资料",
      lede: "不同文档回答不同问题：标准定义接口，论文验证方法，专利划定权利主张，产品页说明厂商能力，年报披露商业与风险。混用会产生错误结论。",
      win: "能在阅读前识别文档类型，并按问题—方法—条件—结果—限制提取有效证据。",
      modelTitle: "五步技术阅读法",
      steps: [
        { title: "先识别文档", body: "标准、论文、专利、产品规格、年报和新闻稿具有不同目的与证据强度。" },
        { title: "提取问题与基线", body: "作者试图解决什么，和哪个现有方案比较。", source: "ieeeAuthor" },
        { title: "记录条件与方法", body: "样品、尺寸、材料、温度、频率、模型和测量方法决定结果边界。" },
        { title: "分开结果与限制", body: "记录直接数据、作者解释、未验证范围和未来工作。" }
      ],
      ideas: [
        { tag: "STD", title: "标准不是性能保证", body: "标准规定兼容边界与行为；具体实现是否达到性能、良率和可靠性仍需验证。", source: "ucie" },
        { tag: "PAPER", title: "论文结论有实验边界", body: "样品规模、仿真假设和测量条件决定能否推广到量产。" },
        { tag: "PAT", title: "专利不等于量产", body: "专利说明权利主张和实施例，不自动证明产品、成本、良率或商业采用。" }
      ],
      lenses: {
        engineering: "建立 claim—evidence—condition—limitation 表，并用图表和方法部分而不是摘要 alone 判断。",
        investment: "用标准与论文验证技术，用年报和监管文件验证商业；产品新闻稿只能证明厂商公开主张。",
        research: "沿引用链找到原始工作，复现关键计算，记录无法获得的数据和待验证假设。"
      },
      case: { title: "处理实验室纪录", prompt: "论文展示 2 µm pitch hybrid bonding 测试结构，但没有量产样品、成本或长期可靠性数据。", answer: "可证明技术可行性进展，不能证明已成熟量产", reasoning: "需要进一步验证大面积良率、吞吐、可靠性、客户认证和单位成本。" },
      sources: ["ieeeAuthor", "ucie", "tsmcSoic", "secEdgar"],
      takeaway: "先识别文档目的，再提取问题、方法、条件、结果和限制；技术可行、量产可行与商业成功是三种不同结论。"
    },
    "0039": {
      title: "怎样设计一个可验证的小研究",
      lede: "好研究不从“我要研究先进封装”开始，而从一个可控制、可测量、有基线的具体问题开始。模型负责压缩机制，实验或独立数据负责验证。",
      win: "能把一个宽泛兴趣改写成具有变量、边界、对照、测量和判据的小研究方案。",
      modelTitle: "从问题到证据闭环",
      steps: [
        { title: "提出窄问题", body: "明确对象、输入变量、结果变量和适用边界。" },
        { title: "建立机制假设", body: "说明为什么输入会影响结果，并画出因果链。" },
        { title: "设计比较", body: "设置基线、对照、参数范围、重复样本和测量方法。", source: "mitStats" },
        { title: "验证与修订", body: "做量纲、极端值、敏感性和独立验证；不符合时修改模型。", source: "mitPython" }
      ],
      ideas: [
        { tag: "VAR", title: "一次先改变少数变量", body: "变量过多会让因果解释失去可识别性，尤其在样本有限时。" },
        { tag: "UNC", title: "报告不确定性", body: "制造波动、测量误差、材料离散和模型假设都要进入结果解释。" },
        { tag: "REPRO", title: "让别人可以复现", body: "保存数据来源、单位、代码、版本、随机种子、边界条件和处理步骤。" }
      ],
      lenses: {
        engineering: "从实际设计选择出发定义成功判据，例如峰温、IR drop、yield 或 cost per good package。",
        investment: "同样方法可测试商业假设：明确 driver、数据、时间滞后、对照和证伪条件。",
        research: "先做低成本模型和公开数据复现，再决定是否需要实验设备或更复杂仿真。"
      },
      case: { title: "把宽问题变窄", prompt: "原题目是“研究 3D 封装散热”。", answer: "改为：在固定总功耗和上表面冷板温度下，TIM 热阻变化如何影响两层 stack 的峰温与层间温差", reasoning: "新问题具有对象、控制条件、自变量、因变量和可验证输出，可从一维热阻模型开始。" },
      sources: ["mitStats", "mitPython", "mitHeat", "ieeeHir"],
      takeaway: "科研问题需要对象、变量、边界、基线和判据；模型与数据形成可复现、可证伪的验证闭环。"
    },
    "0040": {
      title: "结课项目与长期学习路线",
      lede: "完整课程的终点不是记住40课，而是产出能反复更新的技术地图、投资备忘录、科研小提案和大学准备计划。",
      win: "拥有一套把新技术、新公司披露和新论文纳入同一工程因果框架的长期学习系统。",
      modelTitle: "四件作品组成最终能力证据",
      steps: [
        { title: "技术简报", body: "选择一种封装路线，画剖面、signal/power/heat/test 路径并列出取舍。" },
        { title: "投资备忘录", body: "画价值链，建立一手证据表、需求/产能模型和三种情景；不提供买卖建议。", source: "secEdgar" },
        { title: "科研小提案", body: "提出窄问题、机制、变量、方法、验证、风险和预期结果。", source: "ieeeAuthor" },
        { title: "大学准备表", body: "按主方向安排数学、物理、化学、电路、热学、统计、编程与项目里程碑。" }
      ],
      ideas: [
        { tag: "EVID", title: "所有结论可追溯", body: "每项事实保留来源、日期和口径；每项推断保留假设和传导链。" },
        { tag: "MODEL", title: "模型宁可简单透明", body: "先用可解释的小模型建立方向，再在数据和问题需要时增加复杂度。" },
        { tag: "UPDATE", title: "课程结束后继续更新", body: "标准、HBM、封装产能和公司竞争会变化；基础物理框架保持稳定，数据层定期刷新。" }
      ],
      lenses: {
        engineering: "能画结构、列约束、算第一层模型、识别失效与验证方案。",
        investment: "能从一手资料形成可更新论点，区分事实、推断、主张和未知。",
        research: "能选择主方向、阅读技术资料、设计小研究并形成可展示成果。"
      },
      case: { title: "最终评分标准", prompt: "一份报告引用大量市场数字，但没有封装剖面、物理因果、数据口径、反例或证伪条件。", answer: "它仍不是合格结课成果", reasoning: "结课作品必须同时具备结构理解、一手证据、透明模型、不确定性和可验证下一步。" },
      sources: ["ieeeHir", "secEdgar", "ieeeAuthor", "mitPython"],
      takeaway: "最终能力不是记忆术语，而是用结构、证据、模型和验证把技术、产业、科研与专业选择连接起来。"
    }
  }
};
