/* ==========================================================================
   Premium Interactive Functionality for Do Hai Dang Portfolio
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --- Language Translations System ---
  let currentLang = "vi"; // Default language

  const langToggle = document.getElementById("lang-toggle");
  const langText = langToggle.querySelector(".lang-text");

  const translatableElements = document.querySelectorAll("[data-vi][data-en]");

  function switchLanguage(lang) {
    currentLang = lang;
    langText.textContent = lang === "vi" ? "EN" : "VI";
    document.documentElement.setAttribute("lang", lang);

    translatableElements.forEach((el) => {
      const translation = el.getAttribute(`data-${lang}`);
      
      // Check if it's an input or textarea to translate placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", translation);
      } else if (el.tagName === "SELECT") {
        // Do not overwrite select textContent directly, it contains options
      } else {
        el.textContent = translation;
      }
    });

    // Translate select options manually
    const selectOptions = document.querySelectorAll("select option[data-vi][data-en]");
    selectOptions.forEach((opt) => {
      opt.textContent = opt.getAttribute(`data-${lang}`);
    });

    // Render projects list in the selected language
    renderProjectsList();

    // If modal is active, update modal content language
    if (activeProject) {
      renderModal();
    }

    // Trigger terminal restart to print in the new language
    initTerminal();
  }

  langToggle.addEventListener("click", () => {
    const nextLang = currentLang === "vi" ? "en" : "vi";
    switchLanguage(nextLang);
  });

  // --- Sticky Header Scroll Effect ---
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Mobile Hamburger Menu ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      mobileMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });

  // --- Dynamic Projects Database ---
  let projectsData = [];
  let activeProject = null;

  // Local PDF and DOCX files mapping for School Projects
  const homeworkFiles = {
    "bai-1-thao-tac-co-ban-voi-tep-tin-va-thu-muc": {
      pdf: "cns/Bai1.pdf",
      docx: "cns/Bai1.docx"
    },
    "bai2-tim-kiem-va-danh-gia-thong-tin-hoc-thuat": {
      pdf: "cns/Bai2.pdf"
    },
    "bai-3-viet-prompt-hieu-qua-cho-cac-tac-vu-hoc-tap": {
      pdf: "cns/Bai3_Bao_cao_Prompt_Engineering.pdf",
      docx: "cns/Bai3_Bao_cao_Prompt_Engineering.docx"
    },
    "bai-4-su-dung-cong-cu-hop-tac-truc-tuyen-cho-du-an-nhom": {
      pdf: "cns/Bai4_bao-cao-ca-nhan---nang-luc-hop-tac-truc-tuyen---do-hai-dang.pdf",
      docx: "cns/Bai4_bao-cao-ca-nhan.docx"
    },
    "bai-5-su-dung-ai-tao-sinh-de-ho-tro-sang-tao-noi-dung": {
      pdf: "cns/Bai5_bao_cao_AI_sang_tao_noi_dung.pdf",
      docx: "cns/Bai5_bao_cao_AI_sang_tao_noi_dung.docx"
    },
    "bai-6-su-dung-ai-co-trach-nhiem-trong-hoc-tap-va-nghien-cuu": {
      pdf: "cns/bai6_bao_cao_ai_trach_nhiem_hoc_thuat.pdf",
      docx: "cns/bai6_bao_cao_ai_trach_nhiem_hoc_thuat.docx"
    },
    "bai-7-phan-tich-tai-lieu-voi-tro-ly-nghien-cuu-ai": {
      pdf: "cns/bai7_bao_cao_vi_nhua_he_sinh_thai_bien.pdf",
      docx: "cns/bai7_bao_cao_vi_nhua_he_sinh_thai_bien.docx"
    }
  };

  function getFilterCategory(category) {
    const cat = (category || "").toLowerCase();
    if (cat.includes("automation")) return "automation";
    if (cat.includes("api") || cat.includes("engineering")) return "web";
    if (cat.includes("payment")) return "payments";
    if (cat.includes("growth") || cat.includes("marketing") || cat.includes("content")) return "growth";
    if (cat.includes("school") || cat.includes("doan") || cat.includes("đồ án")) return "doan";
    return "web";
  }

  // Load projects from local JSON file
  fetch("projects.json")
    .then(response => response.json())
    .then(data => {
      projectsData = data;
      renderProjectsList();
    })
    .catch(error => console.error("Error loading projects database:", error));

  function renderProjectsList() {
    const projectList = document.getElementById("project-list");
    if (!projectList) return;
    
    projectList.innerHTML = "";
    const isVi = currentLang === "vi";

    projectsData.forEach(p => {
      const filterCategory = getFilterCategory(p.category);
      
      // Select appropriate title and description
      const title = isVi ? (p.titleVi || p.title) : (p.titleEn || p.title);
      const desc = isVi ? (p.shortDescriptionVi || p.shortDescription) : (p.shortDescriptionEn || p.shortDescription);
      
      // Determine badge
      let badge = p.category || "Project";
      if (filterCategory === "doan") {
        badge = isVi ? "Đồ án / Bài tập" : "School Assignment";
      }

      // Determine status text
      let statusText = p.status || "Live";
      const statusVal = (p.status || "").toLowerCase();
      let statusClass = "live";
      if (statusVal === "live" || statusVal === "done" || statusVal === "published") {
        statusClass = "live";
        statusText = isVi ? "Hoạt động" : "Live";
      } else if (statusVal === "in dev" || statusVal === "dev") {
        statusClass = "dev";
        statusText = isVi ? "Đang phát triển" : "In Dev";
      } else {
        statusClass = "private";
        statusText = isVi ? "Riêng tư" : "Private";
      }

      // Extract tech stack tags
      let techArray = [];
      try {
        if (p.techStack) {
          techArray = typeof p.techStack === 'string' ? JSON.parse(p.techStack) : p.techStack;
        }
      } catch(e) {
        techArray = [];
      }
      
      // If tech array is empty and it's a school project, add generic badges
      if (techArray.length === 0 && filterCategory === "doan") {
        techArray = isVi ? ["Báo cáo", "Nghiên cứu", "Nền tảng số"] : ["Report", "Research", "Digital Tools"];
      }

      const techTagsHtml = techArray.slice(0, 3).map(tech => `<span>${tech}</span>`).join("");

      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", filterCategory);
      card.setAttribute("data-id", p.id);
      
      card.innerHTML = `
        <div class="project-card-header">
          <span class="proj-badge">${badge}</span>
          <span class="proj-status ${statusClass}">${statusText}</span>
        </div>
        <h3 class="proj-title">${title}</h3>
        <p class="proj-desc">${desc}</p>
        <div class="proj-tech">
          ${techTagsHtml}
        </div>
      `;
      
      projectList.appendChild(card);
    });
  }

  // --- Modal Popup Operations ---
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const projectList = document.getElementById("project-list");

  if (projectList) {
    projectList.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      
      const projectId = card.getAttribute("data-id");
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        openModal(project);
      }
    });
  }

  function openModal(project) {
    activeProject = project;
    renderModal();
    modal.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    activeProject = null;
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function renderModal() {
    if (!activeProject) return;
    const p = activeProject;
    const isVi = currentLang === "vi";

    // Category
    const badgeEl = document.getElementById("modal-badge");
    badgeEl.textContent = p.category || "Project";

    // Status
    const statusEl = document.getElementById("modal-status");
    statusEl.className = "modal-status";
    const statusVal = (p.status || "").toLowerCase();
    if (statusVal === "live" || statusVal === "done" || statusVal === "published") {
      statusEl.classList.add("live");
      statusEl.textContent = isVi ? "Hoàn thành" : "Live";
    } else if (statusVal === "in dev" || statusVal === "dev") {
      statusEl.classList.add("dev");
      statusEl.textContent = isVi ? "Đang phát triển" : "In Dev";
    } else {
      statusEl.classList.add("private");
      statusEl.textContent = isVi ? "Riêng tư" : "Private";
    }

    // Title
    const titleEl = document.getElementById("modal-title");
    titleEl.textContent = isVi ? (p.titleVi || p.title) : (p.titleEn || p.title);

    // Subtitle
    const subtitleEl = document.getElementById("modal-subtitle");
    subtitleEl.textContent = isVi ? (p.shortDescriptionVi || p.shortDescription) : (p.shortDescriptionEn || p.shortDescription);

    // Role
    const roleContainer = document.getElementById("modal-role-container");
    const roleEl = document.getElementById("modal-role");
    const roleVal = isVi ? (p.roleVi || p.role) : (p.roleEn || p.role);
    if (roleVal) {
      roleContainer.style.display = "flex";
      roleEl.textContent = roleVal;
    } else {
      roleContainer.style.display = "none";
    }

    // Tech tags
    const techContainer = document.getElementById("modal-tech-container");
    const techTagsEl = document.getElementById("modal-tech-tags");
    techTagsEl.innerHTML = "";
    
    let techArray = [];
    try {
      if (p.techStack) {
        techArray = typeof p.techStack === 'string' ? JSON.parse(p.techStack) : p.techStack;
      }
    } catch(e) {
      techArray = [];
    }
    if (techArray && techArray.length > 0) {
      techContainer.style.display = "flex";
      techArray.forEach(tech => {
        const span = document.createElement("span");
        span.textContent = tech;
        techTagsEl.appendChild(span);
      });
    } else {
      techContainer.style.display = "none";
    }

    // Links & Downloads
    const linksContainer = document.getElementById("modal-links-container");
    const linksButtonsEl = document.getElementById("modal-links-buttons");
    linksButtonsEl.innerHTML = "";
    
    let hasLinks = false;
    
    // Check if it is a school project and has homework files mapped
    const hwFiles = homeworkFiles[p.slug];
    if (hwFiles) {
      hasLinks = true;
      if (hwFiles.pdf) {
        const a = document.createElement("a");
        a.className = "modal-links-btn download-btn";
        a.href = hwFiles.pdf;
        a.target = "_blank";
        a.innerHTML = `<svg style="width:14px;height:14px;fill:currentColor;margin-right:4px;vertical-align:middle;" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/></svg> PDF Download`;
        linksButtonsEl.appendChild(a);
      }
      if (hwFiles.docx) {
        const a = document.createElement("a");
        a.className = "modal-links-btn download-btn";
        a.href = hwFiles.docx;
        a.download = "";
        a.innerHTML = `<svg style="width:14px;height:14px;fill:currentColor;margin-right:4px;vertical-align:middle;" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/></svg> DOCX Download`;
        linksButtonsEl.appendChild(a);
      }
    }

    // Other URLs
    if (p.githubUrl) {
      hasLinks = true;
      const a = document.createElement("a");
      a.className = "modal-links-btn";
      a.href = p.githubUrl;
      a.target = "_blank";
      a.textContent = "GitHub";
      linksButtonsEl.appendChild(a);
    }
    
    if (p.liveDemoUrl) {
      hasLinks = true;
      const a = document.createElement("a");
      a.className = "modal-links-btn";
      a.href = p.liveDemoUrl;
      a.target = "_blank";
      a.textContent = "Live Demo";
      linksButtonsEl.appendChild(a);
    }

    if (hasLinks) {
      linksContainer.style.display = "flex";
    } else {
      linksContainer.style.display = "none";
    }

    // HTML Content
    const contentEl = document.getElementById("modal-html-content");
    let rawHtml = isVi ? (p.contentVi || p.fullDescriptionVi || p.shortDescriptionVi) : (p.contentEn || p.fullDescriptionEn || p.shortDescriptionEn);
    
    // If there is no custom HTML, format description as simple text paragraphs
    if (rawHtml && !rawHtml.includes("<p>") && !rawHtml.includes("<div>")) {
      rawHtml = rawHtml.split("\n").map(para => `<p>${para.trim()}</p>`).join("");
    }
    
    contentEl.innerHTML = rawHtml || (isVi ? "Không có nội dung mô tả chi tiết." : "No detailed content available.");
  }

  // --- Projects Filtration system ---
  const filterTabs = document.querySelectorAll(".filter-tab");
  
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Set active tab styling
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");
      const projectCards = document.querySelectorAll(".project-card");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");
          card.style.opacity = 0;
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // --- Terminal Simulator ---
  const terminalScreen = document.getElementById("terminal-screen");
  let terminalTimeout = null;

  const terminalContent = {
    vi: [
      { cmd: "whoami", delay: 800, output: "Developer & MMO Tool Builder" },
      { cmd: "focus", delay: 1000, output: "Tự động hóa thanh toán, API, hệ thống" },
      { cmd: "status", delay: 800, output: "Đang vận hành các sản phẩm thực tế ✔" },
      { cmd: "stack", delay: 1200, output: "Python · Node.js · Next.js · Docker · Nginx" }
    ],
    en: [
      { cmd: "whoami", delay: 800, output: "Developer & MMO Tool Builder" },
      { cmd: "focus", delay: 1000, output: "Payment automation, APIs, system scripting" },
      { cmd: "status", delay: 800, output: "Operating real-world products in production ✔" },
      { cmd: "stack", delay: 1200, output: "Python · Node.js · Next.js · Docker · Nginx" }
    ]
  };

  async function typeWriter(text, element, speed = 60) {
    for (let i = 0; i < text.length; i++) {
      element.textContent += text.charAt(i);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }

  function initTerminal() {
    if (terminalTimeout) {
      clearTimeout(terminalTimeout);
    }
    if (terminalScreen) {
      terminalScreen.innerHTML = "";
      runTerminalCycle();
    }
  }

  async function runTerminalCycle() {
    if (!terminalScreen) return;
    const lines = terminalContent[currentLang];
    
    for (let i = 0; i < lines.length; i++) {
      const lineData = lines[i];
      if (!terminalScreen) return;
      
      const lineEl = document.createElement("div");
      lineEl.className = "terminal-line";
      lineEl.innerHTML = `<span class="terminal-cmd">dohaidang@portfolio:~# </span><span class="cmd-text"></span>`;
      terminalScreen.appendChild(lineEl);
      
      terminalScreen.scrollTop = terminalScreen.scrollHeight;

      const cmdTextEl = lineEl.querySelector(".cmd-text");
      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      cmdTextEl.appendChild(cursor);
      
      await typeWriter(lineData.cmd, cmdTextEl, 80);
      cursor.remove();

      await new Promise((resolve) => setTimeout(resolve, 300));
      if (!terminalScreen) return;

      const outEl = document.createElement("div");
      outEl.className = "terminal-line terminal-out";
      if (lineData.cmd === "status") {
        outEl.className = "terminal-line terminal-success";
      }
      outEl.textContent = lineData.output;
      terminalScreen.appendChild(outEl);

      terminalScreen.scrollTop = terminalScreen.scrollHeight;

      await new Promise((resolve) => setTimeout(resolve, lineData.delay));
    }

    terminalTimeout = setTimeout(() => {
      initTerminal();
    }, 4000);
  }

  initTerminal();

  // --- Contact Form Submission Simulator ---
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const btnSubmit = document.getElementById("btn-submit");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      btnSubmit.disabled = true;
      formStatus.className = "form-status";
      formStatus.textContent = currentLang === "vi" ? "Đang gửi..." : "Sending...";

      setTimeout(() => {
        formStatus.className = "form-status success";
        formStatus.textContent = currentLang === "vi" 
          ? "✔ Tin nhắn đã gửi thành công! Mình sẽ liên hệ sớm." 
          : "✔ Message sent successfully! I will reply soon.";

        contactForm.reset();
        btnSubmit.disabled = false;

        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      }, 1500);
    });
  }
});
