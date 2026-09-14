# 封装解构：40 课课程索引

## 模块 1：物理与封装底座

从 wafer、die 和 package 出发，建立良率、互连、HBM、散热、供电、可靠性、测试与装配的完整因果链。

- [第 1 课：先进封装在系统缩放中的位置](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0001-system-scaling-map.html)
- [第 2 课：从 Wafer 到 Die 再到 Package](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0002-wafer-die-package-system.html)
- [第 3 课：良率、成本与 Chiplet 权衡](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0003-yield-cost-chiplets.html)
- [第 4 课：带宽、距离与每比特能耗](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0004-bandwidth-energy-distance.html)
- [第 5 课：HBM 为什么既要堆高，也要靠近 GPU](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0005-hbm-stacked-and-close.html)
- [第 6 课：中介层、TSV、微凸点分别做什么](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0006-interposer-tsv-microbump.html)
- [第 7 课：整片硅、RDL 与局部硅桥怎么选](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0007-interposer-rdl-bridge.html)
- [第 8 课：芯片靠得更近，热量怎么出去](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0008-power-density-thermal-path.html)
- [第 9 课：电压更低，为什么供电反而更难](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0009-power-delivery-voltage-droop.html)
- [第 10 课：CTE、翘曲与底部填充](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0010-cte-warpage-underfill.html) — 不同材料膨胀不一致，在结构约束下形成翘曲和应力；underfill 能分担载荷，但不是没有代价的万能胶。
- [第 11 课：测试链如何保护昂贵封装](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0011-test-chain-kgd.html) — 测试应沿价值链分层布置：组装前保护昂贵投入，组装后捕获新互连缺陷，系统级再验证真实运行边界。
- [第 12 课：先进封装的制造与组装流程](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0012-assembly-process-flow.html) — 先进封装是一条相互耦合的制造链；每一步既增加价值，也可能新增缺陷，因此量测和测试必须嵌入流程。

## 模块 2：先进封装技术路线图

把 2D、2.5D、3D、fan-out、混合键合、基板、CoWoS、InFO、EMIB、Foveros、UCIe 与 HBM 放到统一坐标系中。

- [第 13 课：2D、2.5D、3D 与 Fan-out](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0013-2d-25d-3d-fanout.html) — 2D/2.5D/3D 先看空间结构，fan-out 先看重构载体与 RDL；永远先画剖面，再背名称。
- [第 14 课：微凸点与混合键合](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0014-microbump-hybrid-bonding.html) — Microbump 用凸点跨界面，hybrid bonding 用介质与铜直接键合；密度提高的代价是更严格的表面与对准控制。
- [第 15 课：有机基板、ABF 与玻璃芯](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0015-substrate-abf-glass.html) — 基板是多层系统，ABF 是积层绝缘材料，玻璃芯是核心材料路线；三者不能当成同一产品比较。
- [第 16 课：CoWoS-S、R、L 的结构差异](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0016-cowos-s-r-l.html) — S 是整片硅，R 是 RDL，L 是 RDL 与局部硅互连组合；名称背后是高密度材料覆盖范围的选择。
- [第 17 课：InFO 与 Fan-out 怎样重构封装](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0017-info-fanout.html) — Fan-out 的核心是重构 die + 制作 RDL + 向外扩展 I/O；它是一种封装方法族，不是一条单一性能等级。
- [第 18 课：EMIB 与 Foveros 的技术地图](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0018-emib-foveros.html) — EMIB 是局部横向硅桥；Foveros 是 2.5D/3D 技术族；复杂产品可把二者组合。
- [第 19 课：UCIe 标准化了什么](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0019-ucie-stack.html) — UCIe 标准化接口栈和管理测试，不会自动解决制造、封装、供电、热和商业责任边界。
- [第 20 课：HBM 代际升级到底升级什么](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0020-hbm-generations.html) — HBM 代际升级是接口、速度、容量、base die、能效、热与封装的共同升级；任何单一数字都不完整。

## 模块 3：工程约束与协同设计

把宣传中的“更快、更低功耗、更可靠”拆成信号完整性、供电完整性、热、机械、测试覆盖和系统协同设计。

- [第 21 课：高速互连的信号完整性](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0021-signal-integrity.html) — 信号完整性关注接收端能否正确判读；链路短是优势，但损耗、反射、串扰、抖动和连接质量共同决定结果。
- [第 22 课：供电完整性与 PDN 阻抗](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0022-power-integrity.html) — PDN 是频率相关网络；电容的容量、位置和寄生参数同样重要，近端小水箱负责最快瞬态。
- [第 23 课：热点、边界条件与热模型](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0023-thermal-modeling.html) — 可信热分析必须同时定义功耗地图、材料几何、界面和冷却边界，并用独立测量校准。
- [第 24 课：翘曲、疲劳与机械可靠性](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0024-mechanical-reliability.html) — 机械可靠性是载荷历史、材料几何、局部响应和统计寿命的共同结果；平均值不能替代热点分析。
- [第 25 课：DFT、测试覆盖与缺陷逃逸](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0025-dft-test-coverage.html) — 测试覆盖的本质是激活、传播、观察和诊断；DFT 决定内部缺陷能否在价值累积前被抓住。
- [第 26 课：为什么必须做系统—技术协同优化](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0026-stco-codesign.html) — STCO 以系统目标统领架构、芯片与封装；先进封装真正的壁垒往往来自跨域闭环，而不是单点纪录。

## 模块 4：制造、产能与成本

从工艺设备与材料进入产能、吞吐、良率、成本和资格认证，形成可以用于产业研究的制造经济学底座。

- [第 27 课：先进封装设备与工艺地图](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0027-equipment-process-map.html) — 设备需求来自具体工艺步骤 × 重复次数 × 吞吐 × 良率；产品名称只是起点。
- [第 28 课：封装材料的六类功能](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0028-materials-map.html) — 封装材料同时参与电、热、力和界面路径；任何单一优秀属性都必须通过工艺与可靠性验证。
- [第 29 课：产能、吞吐、稼动与良率](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0029-capacity-throughput-yield.html) — 有效产能不是工具数，而是工具、吞吐、时间、稼动、良率、产品组合和认证共同决定的合格输出。
- [第 30 课：每颗合格封装的成本模型](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0030-cost-per-good-package.html) — 先进封装经济性必须以每颗合格系统为分母；chiplet 改善某些成本，也会新增互连、组装、测试和验证成本。
- [第 31 课：瓶颈、认证与良率爬坡](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0031-bottleneck-qualification.html) — 商业可用产能要依次穿过设备、工艺、认证和良率；瓶颈解除后还会迁移到下一环节。

## 模块 5：先进封装投资研究

从价值链地图、证据等级和财务映射出发，建立不依赖故事、可复核、可更新的公司与产业研究流程。

- [第 32 课：先进封装价值链地图](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0032-value-chain-map.html) — 先进封装价值链必须同时画物理流程和付款关系；需求增长通过采用率、单位含量、份额和价格传导。
- [第 33 课：投资研究的证据等级](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0033-source-hierarchy.html) — 标准定义、法定披露确认、原始技术资料解释机制；管理层与二手来源用于形成假设，不能替代验证。
- [第 34 课：把技术变量映射到财务报表](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0034-financial-mapping.html) — 技术变量通过数量、价格、良率、利用率和资本强度进入财务；收入、利润和现金流的时间路径可能不同。
- [第 35 课：先进封装公司研究框架](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0035-company-research-framework.html) — 公司研究从价值链角色开始，以产品、客户、能力、经济和风险闭环；所有壁垒都要落到可验证证据。
- [第 36 课：AI 加速器封装案例拆解](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0036-ai-package-case-study.html) — AI 封装是算力、内存、互连、供电、热、良率、产能与商业关系的系统；研究必须沿完整因果链展开。

## 模块 6：科研与大学专业准备

把兴趣映射到电子、材料、机械、制造与计算方向，并训练读论文、设计实验、做模型和完成综合作品的能力。

- [第 37 课：大学专业与基础课程地图](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0037-major-prerequisite-map.html) — 先进封装横跨多个专业；选择入口时看自己最想研究的变量，再用共同理工底座和小项目验证。
- [第 38 课：怎样读标准、论文、专利与产品资料](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0038-read-technical-sources.html) — 先识别文档目的，再提取问题、方法、条件、结果和限制；技术可行、量产可行与商业成功是三种不同结论。
- [第 39 课：怎样设计一个可验证的小研究](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0039-experiment-simulation-design.html) — 科研问题需要对象、变量、边界、基线和判据；模型与数据形成可复现、可证伪的验证闭环。
- [第 40 课：结课项目与长期学习路线](https://fanfanfanfanfan626.github.io/advanced-semiconductor-packaging-course/lessons/0040-capstone-roadmap.html) — 最终能力不是记忆术语，而是用结构、证据、模型和验证把技术、产业、科研与专业选择连接起来。
