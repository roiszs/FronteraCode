"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const DICT: Record<Lang, Dict> = {
  es: {
    // Navbar
    nav_services: "Servicios",
    nav_process: "Proceso",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    nav_projects: "Proyectos",

    // Home hero
    hero_badge: "Tecnología de frontera · Software que trabaja contigo",
    hero_title: "Software y websites que funcionan en operación real.",
    hero_desc:
      "En FronteraCode diseñamos y desarrollamos productos digitales para PyMEs, e-commerce y maquilas: sistemas internos, dashboards, automatización y sitios web modernos.",
    cta_quote: "Cotizar proyecto",
    cta_services: "Ver servicios",
    cta_plans: "Planes mensuales",
    bullet_1: "• Entregas por sprints con demos semanales",
    bullet_2: "• UI moderna, simple de usar",
    bullet_3: "• Escalable y listo para crecer",

    // Sections
    services_title: "Servicios",
    services_sub: "Soluciones claras, sin complicaciones, orientadas a resultados.",
    service_label: "Servicio",

    process_title: "Proceso de trabajo",
    process_sub: "Transparente, rápido y con entregables visibles.",

    faq_title: "FAQ",
    faq_sub: "Respuestas rápidas a las dudas más comunes.",

    contact_title: "Contacto",
    contact_sub:
      "Cuéntanos qué necesitas y te proponemos una ruta clara: alcance, tiempos y entregables.",
    channels_title: "Canales directos",
    form_hint: "Formulario: envía tu solicitud y te respondemos por correo.",

    footer_right: "Ciudad Juárez · Tecnología de frontera",

    // Mensualidades
    plans_badge: "Planes mensuales · Tu programador personal",
    plans_h1: "Soporte, mejoras y evolución continua.",
    plans_h1_2: "Mes a mes.",
    plans_p:
      "Pagas una mensualidad fija y nos encargamos de mantener, mejorar y optimizar tu producto durante el mes contratado. Ideal si necesitas cambios frecuentes sin volver a cotizar cada ajuste.",
    plans_btn_wa: "Elegir plan por WhatsApp",
    plans_btn_mail: "Solicitar por email",

    how_title: "Cómo funciona",
    how_1_t: "1) Diagnóstico rápido",
    how_1_d: "Entendemos tu sistema y definimos prioridades del mes.",
    how_2_t: "2) Backlog mensual",
    how_2_d: "Listamos mejoras y bugs con orden y criterios claros.",
    how_3_t: "3) Ejecución + comunicación",
    how_3_d: "Implementamos y te damos actualizaciones durante el mes.",
    how_4_t: "4) Cierre del mes",
    how_4_d: "Entregamos resumen de cambios y siguiente recomendación.",

    monthly_title: "Mensualidades",
    monthly_sub: "Precios por mes. Soporte y mejoras continuas durante el mes contratado.",
    plan_month: "Plan mensual",
    includes: "Incluye",
    ideal_for: "Ideal para:",

    punctual_title: "Cambios puntuales sin mensualidad",
    punctual_desc:
      "Si no cuentas con un plan mensual, también puedes solicitar cambios específicos de forma puntual.",
    punctual_one: "/ pago único",
    punctual_note: "Ideal para ajustes rápidos cuando no se requiere soporte continuo.",

    clar_title: "Qué cubre la mensualidad",
    clar_sub: "Claridad total para evitar malentendidos y proteger el ritmo del proyecto.",
    clar_in: "Incluye (durante el mes)",
    clar_out: "No incluye (se cotiza aparte)",

    next_step: "Siguiente paso",
    next_h2: "Te recomendamos el plan ideal en 5–10 minutos.",
    next_p:
      "Dinos qué sistema tienes (o qué quieres construir) y te sugerimos el plan que mejor se ajusta, incluyendo prioridades del primer mes.",
    next_btn_wa: "Hablar por WhatsApp",
    next_btn_form: "Ir al formulario",
  },

  en: {
    // Navbar
    nav_services: "Services",
    nav_process: "Process",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_projects: "Projects",

    // Home hero
    hero_badge: "Border tech · Software that works with your operation",
    hero_title: "Software and websites that work in real operations.",
    hero_desc:
      "At FronteraCode we design and build digital products for SMBs, e-commerce, and manufacturing: internal systems, dashboards, automation, and modern websites.",
    cta_quote: "Get a quote",
    cta_services: "View services",
    cta_plans: "Monthly plans",
    bullet_1: "• Weekly sprint deliveries with demos",
    bullet_2: "• Modern UI, easy to use",
    bullet_3: "• Scalable and ready to grow",

    // Sections
    services_title: "Services",
    services_sub: "Clear solutions, no fluff, focused on outcomes.",
    service_label: "Service",

    process_title: "Work process",
    process_sub: "Transparent, fast, with visible deliverables.",

    faq_title: "FAQ",
    faq_sub: "Quick answers to common questions.",

    contact_title: "Contact",
    contact_sub:
      "Tell us what you need and we’ll propose a clear path: scope, timeline, and deliverables.",
    channels_title: "Direct channels",
    form_hint: "Form: send your request and we’ll reply by email.",

    footer_right: "Ciudad Juárez · Border technology",

    // Mensualidades
    plans_badge: "Monthly plans · Your personal developer",
    plans_h1: "Support, improvements, and continuous evolution.",
    plans_h1_2: "Month to month.",
    plans_p:
      "You pay a fixed monthly fee and we maintain, improve, and optimize your product throughout the month. Perfect if you need frequent changes without quoting every adjustment.",
    plans_btn_wa: "Choose a plan via WhatsApp",
    plans_btn_mail: "Request by email",

    how_title: "How it works",
    how_1_t: "1) Quick diagnosis",
    how_1_d: "We understand your system and define monthly priorities.",
    how_2_t: "2) Monthly backlog",
    how_2_d: "We list improvements/bugs with clear ordering and criteria.",
    how_3_t: "3) Execution + updates",
    how_3_d: "We implement and keep you posted during the month.",
    how_4_t: "4) Month closeout",
    how_4_d: "We deliver a change summary and next recommendations.",

    monthly_title: "Monthly plans",
    monthly_sub: "Monthly pricing. Continuous support and improvements during the contracted month.",
    plan_month: "Monthly plan",
    includes: "Includes",
    ideal_for: "Best for:",

    punctual_title: "One-time changes (no monthly plan)",
    punctual_desc:
      "If you don’t have a monthly plan, you can still request specific one-time changes.",
    punctual_one: "/ one-time payment",
    punctual_note: "Great for quick adjustments when you don’t need ongoing support.",

    clar_title: "What the monthly plan covers",
    clar_sub: "Total clarity to avoid misunderstandings and protect delivery rhythm.",
    clar_in: "Included (during the month)",
    clar_out: "Not included (quoted separately)",

    next_step: "Next step",
    next_h2: "We’ll recommend the right plan in 5–10 minutes.",
    next_p:
      "Tell us what system you have (or what you want to build) and we’ll suggest the plan that fits best, including first-month priorities.",
    next_btn_wa: "Chat on WhatsApp",
    next_btn_form: "Go to the form",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof (typeof DICT)["es"]) => string;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("fc_lang") as Lang | null) : null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("fc_lang", lang);
  }, [lang]);

  const value = useMemo<Ctx>(() => {
    return {
      lang,
      setLang,
      toggle: () => setLang((p) => (p === "es" ? "en" : "es")),
      t: (key) => DICT[lang][key] ?? String(key),
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within <LanguageProvider />");
  return ctx;
}
