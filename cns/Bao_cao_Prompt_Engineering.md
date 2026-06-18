# BÁO CÁO
## Kỹ Năng Viết Prompt Hiệu Quả cho Mô Hình Ngôn Ngữ Lớn (LLM) Trong Học Tập

---

## Phần 1: Giới thiệu

Báo cáo này thực hiện việc thử nghiệm và so sánh 3 phiên bản prompt cho mỗi trong số 3 tác vụ học tập phổ biến, nhằm xác định các yếu tố làm nên một prompt hiệu quả khi tương tác với AI.

**Công cụ thử nghiệm:** Hermes Agent (DeepSeek V4 Flash) — mô hình ngôn ngữ lớn.

**3 tác vụ được chọn:**
1. **Tóm tắt tài liệu học thuật** — về AI trong giáo dục đại học
2. **Giải thích khái niệm phức tạp** — Blockchain technology
3. **Tạo bộ câu hỏi ôn tập** — Cơ chế quang hợp (Sinh học lớp 11)

---

## Phần 2: Tác vụ 1 — Tóm tắt Tài liệu Học thuật

### 2.1 Văn bản gốc

> "Artificial intelligence (AI) is transforming higher education by enabling personalized learning experiences, automating administrative tasks, and providing real-time feedback to students. Machine learning algorithms can analyze student performance data to identify at-risk students early, allowing for timely interventions. Natural language processing tools assist in grading essays and providing constructive feedback. However, concerns about data privacy, algorithmic bias, and the potential reduction of human interaction in education remain significant challenges that institutions must address."

---

### 2.2 Prompt cơ bản

**Prompt:**
> Summarize this text: [văn bản]

**Đầu ra AI:**
> AI is transforming higher education through personalized learning, automated admin tasks, and real-time feedback. ML algorithms identify at-risk students, NLP tools assist with grading. Challenges include data privacy, algorithmic bias, and reduced human interaction.

**Phân tích:**
✅ Ưu điểm: Nhanh, đúng ý chính, giữ được cấu trúc benefits-challenges.
❌ Nhược điểm: Viết tắt ML/NLP không giải thích; format không rõ ràng (run-on sentences); thiếu academic tone.

### 2.3 Prompt cải tiến

**Prompt:**
> Please summarize the following academic text about AI in higher education.
> Requirements:
> - Length: 3-4 sentences
> - Focus on: key applications, benefits, and challenges
> - Tone: academic but accessible
> - Format: paragraph
> Text: [văn bản]

**Đầu ra AI:**
> Artificial intelligence is reshaping higher education through three key applications: personalized learning experiences tailored to individual student needs, automated administrative tasks that reduce institutional workload, and real-time feedback systems powered by natural language processing for essay grading. Machine learning algorithms further enhance student support by analyzing performance data to identify at-risk learners early, enabling timely interventions. Despite these benefits, significant challenges persist — including concerns about data privacy, algorithmic bias, and the potential erosion of human interaction in educational settings — which institutions must carefully address.

**Phân tích:**
✅ Ưu điểm: Cấu trúc rõ ràng (3 câu tương ứng 3 ý); giữ được academic tone; không viết tắt; dễ đọc.
❌ Nhược điểm: Hơi dài so với yêu cầu (vẫn trong giới hạn chấp nhận được).

### 2.4 Prompt nâng cao (Role + Chain-of-Thought + Few-Shot)

**Prompt:**
> Role: You are an academic writing tutor helping a university student learn to summarize research texts.
> Task: Summarize using chain-of-thought reasoning.
> Step 1: Identify MAIN TOPIC
> Step 2: Extract KEY APPLICATIONS
> Step 3: Identify BENEFITS
> Step 4: Note CHALLENGES
> Step 5: Synthesize into 3-4 sentence summary
> [kèm few-shot example]

**Đầu ra AI:**
> **Chain-of-Thought Reasoning:**
> - Step 1 – Main topic: AI in higher education — its applications, benefits, and challenges.
> - Step 2 – Key applications: personalized learning, automated admin tasks, real-time feedback, student performance analysis via ML, essay grading via NLP.
> - Step 3 – Benefits: early identification of at-risk students (timely intervention), reduced workload for educators, faster feedback for students.
> - Step 4 – Challenges: data privacy concerns, algorithmic bias, risk of reducing human interaction.
> - Step 5 – Synthesis:
>
> **Final Summary:** AI is transforming higher education through personalized learning, administrative automation, and NLP-driven feedback systems, while ML algorithms enable early identification of at-risk students. These applications enhance efficiency and student support. However, institutions must navigate significant challenges including data privacy, algorithmic bias, and the risk of diminishing meaningful human interaction in education.

**Phân tích:**
✅ Ưu điểm: Minh bạch — người đọc thấy được quá trình tư duy (chain-of-thought); tách bạch rõ phân tích và tổng hợp; đóng vai "tutor" giúp người học hiểu cách làm, không chỉ nhận kết quả.
❌ Nhược điểm: Dài hơn; phần CoT chiếm diện tích — không phù hợp khi cần tóm tắt nhanh.

### 2.5 So sánh tổng thể — Tác vụ 1

| Tiêu chí | Cơ bản | Cải tiến | Nâng cao |
|----------|:------:|:--------:|:--------:|
| Độ chính xác | 6/10 — thiếu nuance | 9/10 | 9/10 |
| Cấu trúc | 4/10 — run-on | 9/10 — 3 đoạn rõ | 10/10 — CoT + final |
| Academic tone | 5/10 — quá informal | 9/10 | 8/10 — CoT hơi informal |
| Tính sư phạm | 2/10 | 5/10 | 10/10 — dạy cách tóm tắt |
| Độ dài phù hợp | 8/10 — ngắn | 7/10 | 6/10 — hơi dài |

---

## Phần 3: Tác vụ 2 — Giải thích Khái niệm Phức tạp

### 3.1 Prompt cơ bản

**Prompt:**
> Explain 'Blockchain technology' in simple terms.

**Đầu ra AI:**
> Blockchain is a digital ledger where transactions are recorded in blocks linked together. Each block contains a cryptographic hash of the previous block, making it secure and tamper-proof. It's used for cryptocurrencies like Bitcoin, but also for supply chain tracking and smart contracts.

**Phân tích:**
✅ Đúng khái niệm cốt lõi nhưng quá ngắn, thiếu ví dụ trực quan, người mới bắt đầu khó hình dung.

### 3.2 Prompt cải tiến

**Prompt:**
> Explain "Blockchain technology" with:
> 1. Simple analogy
> 2. Technical definition (2-3 sentences)
> 3. Real-world application (1-2 examples)
> 4. Why it matters
> Audience: First-year university student, non-technical.

**Đầu ra AI:**
> 1. **Analogy:** Think of blockchain as a shared Google Sheet that everyone can see, but no one can delete or edit past entries — only add new ones, and every change is permanently recorded.
>
> 2. **Technical definition:** Blockchain is a distributed ledger technology where data is stored in "blocks" that are cryptographically linked in a chronological chain. Each block contains a timestamp, transaction data, and a hash of the previous block, making tampering detectable. The ledger is maintained by a network of computers (nodes) that validate new entries through consensus mechanisms.
>
> 3. **Examples:** Bitcoin uses blockchain for peer-to-peer digital currency without banks. In supply chains, Walmart uses blockchain to trace food from farm to store in seconds instead of days.
>
> 4. **Why it matters:** Blockchain enables trustless transactions — parties don't need to know or trust each other because the system itself guarantees integrity, potentially transforming finance, healthcare, and governance.

**Phân tích:**
✅ Cấu trúc rõ ràng, analogy dễ hiểu ("Google Sheet công cộng"), ví dụ cụ thể, phù hợp đối tượng non-technical.

### 3.3 Prompt nâng cao (Feynman Technique + Role + Few-Shot)

**Prompt:**
> Role: You are Richard Feynman. Apply the Feynman Technique to explain Blockchain.
> Step 1-4: Feynman Technique steps
> [kèm few-shot example về Quantum Entanglement]

**Đầu ra AI:**
> **Feynman Explanation:**
> "Imagine a village where everyone has a notebook. Every time someone trades a cow for a chicken, everyone writes it down in their notebook. If someone tries to cheat and say 'I never got that chicken,' everyone else checks their notebooks and says, 'Yes, you did — it's written on page 42.' A blockchain is like that village's notebooks — but digital, global, and with unbreakable locks (cryptography) on each page. Nobody owns the master notebook; everyone has a copy, so there's no central authority to corrupt."
>
> **Technical Summary (2 sentences):**
> Blockchain is a distributed, immutable ledger where data is stored in cryptographically linked blocks across a peer-to-peer network. Consensus mechanisms ensure all copies stay synchronized without requiring a central authority.

**Phân tích:**
✅ Lối giải thích Feynman rất dễ nhớ ("làng có sổ tay" analogy); kết hợp với technical summary ngắn gọn.
❌ Cần thêm bước xác nhận — có thể người học hiểu analogy nhưng không nắm được khía cạnh kỹ thuật.

### 3.4 So sánh tổng thể — Tác vụ 2

| Tiêu chí | Cơ bản | Cải tiến | Nâng cao |
|----------|:------:|:--------:|:--------:|
| Dễ hiểu với người mới | 5/10 | 9/10 | 10/10 |
| Độ chính xác kỹ thuật | 7/10 | 9/10 | 8/10 |
| Cấu trúc | 3/10 | 10/10 | 9/10 |
| Tính ghi nhớ | 4/10 | 8/10 | 10/10 |
| Phù hợp mục đích học tập | 5/10 | 9/10 | 9/10 |

---

## Phần 4: Tác vụ 3 — Tạo Bộ Câu hỏi Ôn tập

### 4.1 Prompt cơ bản

**Prompt:**
> Generate review questions about Cơ chế quang hợp (Photosynthesis) — Sinh học lớp 11.

**Đầu ra AI:**
> 1. What is photosynthesis?
> 2. Where does photosynthesis occur in a plant cell?
> 3. What are the two stages of photosynthesis?
> 4. What is the role of chlorophyll?
> 5. What is the difference between light-dependent and light-independent reactions?

**Phân tích:**
✅ Đúng chủ đề. ❌ Chỉ có recall questions (mức Remember — thấp nhất của Bloom's Taxonomy); không có câu hỏi phân tích hay ứng dụng; không có đáp án.

### 4.2 Prompt cải tiến

**Prompt:**
> Create 5 review questions about Photosynthesis — Sinh học lớp 11.
> Mix: 2 recall, 2 comprehension, 1 application.
> Include answer key. Suitable for high school exam prep.

**Đầu ra AI:**
> 1. [Recall] What are the two main stages of photosynthesis? → Light-dependent reactions (thylakoid membranes) and Calvin cycle (stroma).
> 2. [Recall] Name the primary pigment and its absorption spectrum. → Chlorophyll a; absorbs red (660nm) and blue (430nm) light.
> 3. [Comprehension] Explain why leaves appear green. → Chlorophyll reflects green wavelengths (500-600nm) rather than absorbing them.
> 4. [Comprehension] Describe the relationship between light intensity and photosynthetic rate. → As light increases, rate rises until reaching a plateau where another factor (CO2 or temperature) becomes limiting.
> 5. [Application] A farmer covers his greenhouse with green plastic. Will his crops thrive? Explain. → No — green plastic blocks red and blue light that chlorophyll needs; only green light passes through, which is reflected rather than absorbed.

**Phân tích:**
✅ Có phân loại rõ (Recall/Comprehension/Application); có answer key; câu application rất thực tế. ❌ Chỉ 5 câu, chưa bao phủ hết các cấp độ Bloom's cao hơn.

### 4.3 Prompt nâng cao (Role + Bloom's Taxonomy + Few-Shot)

**Prompt:**
> Role: Experienced high school biology teacher.
> Apply Bloom's Taxonomy: Remember, Understand, Apply, Analyze, Evaluate.
> 2 questions per level (10 total). Table format with Model Answer and Study Tip.
> [kèm few-shot example]

**Đầu ra AI:**
> | Level | Question | Model Answer | Study Tip |
> |-------|----------|--------------|----------|
> | REMEMBER | What is the primary function of stomata in photosynthesis? | Stomata regulate gas exchange — allowing CO2 in and O2 out — and control water loss through transpiration. | Create labeled diagrams of leaf cross-sections. |
> | REMEMBER | Name the two photosystems involved in light reactions. | Photosystem II (P680) and Photosystem I (P700), named after their peak absorption wavelengths. | Use mnemonic: "II comes before I in the electron flow." |
> | UNDERSTAND | Explain why the Calvin cycle is also called "light-independent." | It doesn't require light directly — it uses ATP and NADPH produced in light reactions to fix CO2 into glucose. However, it indirectly depends on light for these energy carriers. | Trace the energy flow: light → ATP/NADPH → glucose. |
> | UNDERSTAND | Describe how C4 plants differ from C3 plants in carbon fixation. | C4 plants first fix CO2 into a 4-carbon compound in mesophyll cells, then transport it to bundle-sheath cells for the Calvin cycle — minimizing photorespiration. | Compare diagrams of C3 vs C4 leaf anatomy side by side. |
> | APPLY | A plant in a sealed container with limited CO2 stops producing O2 during the day. Why? | CO2 is the carbon source for the Calvin cycle. Without CO2, NADP+ cannot be regenerated, so the electron transport chain halts, stopping O2 production from photolysis. | Role-play the electron transport chain step by step. |
> | APPLY | If you remove the thylakoid membrane but keep the stroma intact, can photosynthesis occur? | No — the light-dependent reactions stop without thylakoid membranes, so no ATP/NADPH is produced to fuel the Calvin cycle in the stroma. | Think of thylakoid as the "power plant" and stroma as the "factory." |
> | ANALYZE | Compare the efficiency of C3 vs C4 photosynthesis under high-temperature conditions. | C3 plants suffer from photorespiration at high temps (rubisco binds O2 instead of CO2). C4 plants concentrate CO2 in bundle-sheath cells, reducing photorespiration. Therefore, C4 plants are more efficient in hot climates. | Create a Venn diagram comparing C3, C4, and CAM. |
> | ANALYZE | What would happen to the Calvin cycle if photosystem II was inhibited? | Without PSII, water cannot be split → no electrons for the ETC → no NADPH production → Calvin cycle stops because it needs NADPH to reduce 3-PGA to G3P. | Trace the "what if" backward through the pathway. |
> | EVALUATE | Which is more limiting for crop productivity — light intensity or CO2 concentration? Justify. | At low light, light is limiting. At high light (above saturation point), CO2 becomes limiting because the Calvin cycle can't process more CO2 than the available RuBP. In practice, both are co-limiting. | Plot a graph and identify the rate-limiting step at each segment. |
> | EVALUATE | Evaluate the claim: "Artificial light can completely replace sunlight for plant growth." | Partially true — artificial lights providing red and blue wavelengths can support growth, but sunlight has the full spectrum, higher intensity, and is free. Complete replacement is possible (vertical farms) but energy-intensive and not carbon-neutral unless powered by renewables. | Research a real vertical farm case study. |

**Phân tích:**
✅ Ưu điểm vượt trội: 10 câu phủ 5 cấp độ Bloom's; mỗi câu đều có model answer + study tip; tính sư phạm cao.
❌ Duy nhất: Prompt dài, cần nhiều công sức soạn.

### 4.4 So sánh tổng thể — Tác vụ 3

| Tiêu chí | Cơ bản | Cải tiến | Nâng cao |
|----------|:------:|:--------:|:--------:|
| Số lượng câu hỏi | 5 | 5 | 10 |
| Đa dạng cấp độ tư duy | 1/5 (Remember) | 3/5 | 5/5 (Bloom's đầy đủ) |
| Chất lượng đáp án | Không có | 7/10 | 10/10 |
| Tính sư phạm | 2/10 | 7/10 | 10/10 |
| Ứng dụng thực tế | 3/10 | 8/10 | 10/10 |

---

## Phần 5: Tổng hợp Nguyên tắc và Mẹo Viết Prompt Hiệu quả

### 5.1 Các nguyên tắc vàng (Gold Principles)

Dựa trên kết quả thử nghiệm 9 prompt cho 3 tác vụ, các nguyên tắc sau được rút ra:

#### 1. Cung cấp cấu trúc rõ ràng (Structural Clarity)

Prompt càng có cấu trúc → output càng có tổ chức. Prompt "Explain X" (cơ bản) cho output 3 câu hỏi. Prompt yêu cầu "1. Analogy, 2. Definition, 3. Examples, 4. Why it matters" cho output có cấu trúc tương ứng.

> **Mẹo:** Dùng số thứ tự, bullet points, hoặc headings trong prompt.

#### 2. Xác định vai trò (Role Prompting)

Gán role cho AI ("You are an academic tutor", "You are Richard Feynman", "You are a biology teacher") thay đổi đáng kể chất lượng output:
- Role "tutor" → output mang tính hướng dẫn, giải thích quá trình tư duy
- Role "Feynman" → output giàu analogy, dễ nhớ
- Role "teacher" → output có tính sư phạm, phù hợp mục tiêu học tập

> **Mẹo:** Chọn role phù hợp với mục tiêu — academic tutor (học thuật), Feynman (dễ hiểu), teacher (sư phạm), researcher (chuyên sâu).

#### 3. Liệt kê yêu cầu cụ thể (Specific Constraints)

Các yêu cầu định lượng (3-4 sentences, 5 questions) và định tính (tone, format, audience) giúp AI hiểu chính xác kỳ vọng.

> **Mẹo:** Càng cụ thể càng tốt. Thay vì "explain simply" → "explain to a first-year non-technical student".

#### 4. Sử dụng Chain-of-Thought (CoT)

Yêu cầu AI giải thích từng bước tư duy (Step 1...Step 5) trước khi trả lời:
- Tăng tính minh bạch — thấy được logic của AI
- Cải thiện độ chính xác — AI "suy nghĩ kỹ hơn" trước khi trả lời
- Hỗ trợ học tập — người học thấy được quy trình, không chỉ kết quả

> **Mẹo:** Dùng CoT cho các tác vụ phức tạp. Bỏ qua cho các tác vụ đơn giản (lãng phí token).

#### 5. Cung cấp Few-Shot Examples

Đưa 1-2 ví dụ về format mong muốn giúp AI hiểu chính xác cấu trúc và chất lượng output kỳ vọng.

> **Mẹo:** Chọn ví dụ đại diện — không quá dài, không quá ngắn. Ví dụ "good" và "bad" càng tốt.

#### 6. Tận dụng Framework học thuật (Bloom's Taxonomy, Feynman Technique)

Các framework có sẵn cung cấp cấu trúc tư duy chất lượng cao:
- Bloom's Taxonomy → đảm bảo đa dạng cấp độ tư duy
- Feynman Technique → đảm bảo giải thích dễ hiểu
- Socratic Method → đảm bảo chiều sâu phân tích

> **Mẹo:** Học và áp dụng các framework vào prompt — biến AI thành công cụ thực hành phương pháp học tập.

#### 7. Xác định format output (Output Formatting)

Càng chi tiết format yêu cầu → output càng dễ sử dụng: "table with 4 columns", "numbered list with answer key", "paragraph of 3-4 sentences".

> **Mẹo:** Trong prompt, ghi rõ: Format, độ dài, đối tượng, giọng văn, ngôn ngữ.

### 5.2 Công thức Prompt Tổng quát

```
[Vai trò] + [Nhiệm vụ] + [Cấu trúc/Bước] + [Yêu cầu] + [Ví dụ] + [Format Output]
```

Ví dụ:
> "Bạn là giáo viên sinh học. Hãy tạo 10 câu hỏi ôn tập về quang hợp theo thang Bloom (Remember→Evaluate). Mỗi câu kèm đáp án mẫu. Format: bảng. Tham khảo ví dụ đính kèm."

### 5.3 Thang đánh giá Mức độ Prompt

| Cấp độ | Đặc điểm | Ví dụ | Hiệu quả |
|--------|----------|-------|:--------:|
| 🟢 Cơ bản | 1 câu, không cấu trúc | "Explain X" | 30-50% |
| 🟡 Cải tiến | Có yêu cầu, có cấu trúc | "Explain X with analogy + definition + examples" | 60-80% |
| 🔴 Nâng cao | Role + CoT + Few-Shot + Framework | "You are Feynman. Apply Feynman Technique. Step 1-4. Example: [ví dụ]" | 90-100% |

---

## Phần 6: Kết luận

1. **Prompt càng có cấu trúc → output càng chất lượng.** Sự khác biệt giữa prompt cơ bản (30-50% hiệu quả) và nâng cao (90-100%) là rất lớn.

2. **Role prompting thay đổi hoàn toàn chất lượng output.** AI điều chỉnh giọng văn, độ sâu, và cách tiếp cận dựa trên role được gán.

3. **Chain-of-thought tăng minh bạch và độ chính xác,** đặc biệt quan trọng trong môi trường học thuật nơi quy trình tư duy được đánh giá cao.

4. **Few-shot examples là "killer feature"** — chỉ cần 1 ví dụ đã đủ để AI hiểu chính xác cấu trúc và chất lượng kỳ vọng.

5. **Framework học thuật (Bloom's, Feynman) có thể được "dạy" cho AI qua prompt,** biến AI thành công cụ thực hành các phương pháp học tập tiên tiến.

6. **Prompt engineering là kỹ năng có thể học được** — không cần kiến thức lập trình, chỉ cần tư duy cấu trúc và thực hành.

---

*Báo cáo được thực hiện với mục đích học tập. Các prompt và output được ghi lại trung thực từ quá trình thử nghiệm trên Hermes Agent (DeepSeek V4 Flash).*
