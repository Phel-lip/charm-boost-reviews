import heroAsset from "@/assets/dc-espaco.jpg";
const hero = hero;
import mechasMegaAsset from "@/assets/svc-mechas-mega.jpg";
const mechasMega = mechasMega;
import tratamentoAsset from "@/assets/svc-tratamento.jpg";
const tratamento = tratamento;
import ozonioAsset from "@/assets/svc-ozonio.jpg";
const ozonio = ozonio;
import terapiaAsset from "@/assets/svc-terapia-capilar.jpg";
const terapia = terapia;
import penteadoAsset from "@/assets/svc-penteado.jpg";
const penteado = penteado;
import unhasAmeixaAsset from "@/assets/svc-unhas-ameixa.jpg";
const unhasAmeixa = unhasAmeixa;
import unhasMarromAsset from "@/assets/svc-unhas-marrom.jpg";
const unhasMarrom = unhasMarrom;
import unhasNudeAsset from "@/assets/svc-unhas-nude.jpg";
const unhasNude = unhasNude;

// Single source of truth for salon details.
// Name, Instagram, bio services: official Instagram. City + phone: public business listings
// (Cylex, Guia Fácil, Google place data) that all agree. Street address and hours are NOT
// shown: listings conflict and the salon announced a move to a new space (Oct 2026).
export const SALON = {
  name: "Doce Charme",
  tagline: "Centro Estético",
  city: "Mossoró · RN",
  whatsapp: "5584988752165",
  whatsappLabel: "(84) 98875-2165",
  instagram: "https://www.instagram.com/docecharmecentroestetico/",
  instagramHandle: "@docecharmecentroestetico",
  heroImg: hero,
};

const IG = "https://www.instagram.com/docecharmecentroestetico";

export type Category = "Cabelos" | "Tratamentos" | "Unhas";

export type Service = {
  id: string;
  title: string;
  category: Category;
  copy: string;
  cta: string;
  img: string;
  pros: string[];
  source: string;
  alt: string;
};

// No professionals are publicly named, so the professional step is skipped.
const PRO: string[] = [];

export const SERVICES: Service[] = [
  { id: "mega-mechas", title: "Mechas & mega hair", category: "Cabelos", copy: "Manutenção completa: retirada das mechas antigas, pré-química, novas mechas e colocação do mega hair.", cta: "Solicitar mechas", img: mechasMega, alt: "Cabelo longo loiro com mechas e mega hair finalizado no salão", pros: PRO, source: `${IG}/reel/DeQQivgBLiB/` },
  { id: "penteado", title: "Penteados", category: "Cabelos", copy: "Coque clássico e elegante, com acabamento impecável nos detalhes — inclusive para as pequenas.", cta: "Solicitar penteado", img: penteado, alt: "Coque alto trançado feito no salão Doce Charme", pros: PRO, source: `${IG}/p/DeMfVrilgeJ/` },
  { id: "tratamento", title: "Tratamento personalizado", category: "Tratamentos", copy: "Cuidado capilar pensado para os seus fios, com produtos profissionais aplicados no salão.", cta: "Solicitar tratamento", img: tratamento, alt: "Aplicação de tratamento capilar com produtos profissionais", pros: PRO, source: `${IG}/reel/Dee06OehY-j/` },
  { id: "ozonioterapia", title: "Ozonioterapia capilar", category: "Tratamentos", copy: "Terapia com ozônio para o couro cabeludo, feita com equipamento próprio no salão.", cta: "Solicitar ozonioterapia", img: ozonio, alt: "Equipamento de ozonioterapia capilar do salão", pros: PRO, source: `${IG}/reel/Dai9OffJLtR/` },
  { id: "terapia-capilar", title: "Cuidado do couro cabeludo", category: "Tratamentos", copy: "Avaliação e cuidado do couro cabeludo, mostrados no antes e depois publicado pelo salão.", cta: "Solicitar avaliação", img: terapia, alt: "Avaliação do couro cabeludo de cliente no salão", pros: PRO, source: `${IG}/reel/DbFxZ-NJLXg/` },
  { id: "esmaltacao", title: "Esmaltação", category: "Unhas", copy: "Tom ameixa com brilho intenso e acabamento que encanta. O charme está nos detalhes.", cta: "Solicitar esmaltação", img: unhasAmeixa, alt: "Unhas naturais esmaltadas em tom ameixa", pros: PRO, source: `${IG}/p/DeffTqFsBWX/` },
  { id: "unhas-marrom", title: "Unhas em tons terrosos", category: "Unhas", copy: "Mãos bem cuidadas com esmaltação marrom chocolate, cutilagem e acabamento caprichado.", cta: "Solicitar unhas", img: unhasMarrom, alt: "Unhas esmaltadas em marrom chocolate", pros: PRO, source: "https://www.instagram.com/__design__kle__/p/DeP-pbksq9cf9L6hhDdTFMJWM1lDM2b72ywcco0/" },
  { id: "unhas-nude", title: "Unhas nude", category: "Unhas", copy: "Esmaltação rosada e delicada, para quem prefere um visual leve e elegante no dia a dia.", cta: "Solicitar unhas nude", img: unhasNude, alt: "Unhas esmaltadas em tom nude rosado", pros: PRO, source: "https://www.instagram.com/__design__kle__/p/DeDYBDSNEEvx5Y7j2cLnINkjBBrOCYo7cdJ11c0/" },
];

export const CATEGORIES: ("Todos" | Category)[] = ["Todos", "Cabelos", "Tratamentos", "Unhas"];
export const MARQUEE_ITEMS = ["CABELOS", "MECHAS & MEGA HAIR", "TRATAMENTOS CAPILARES", "UNHAS", "SOBRANCELHA", "DEPILAÇÃO", "CÍLIOS", "PILATES"];
// Opening hours are not verified, so periods are only generic preferences.
export const PERIODS = ["Manhã", "Tarde", "Fim da tarde"];
export const NO_PREF = "Sem preferência";

export function fmtDate(d: string) {
  if (!d) return "A combinar";
  const [y, m, dd] = d.split("-");
  return `${dd}/${m}/${y}`;
}

export function todayLocal(now = new Date()) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

export function buildWhatsAppUrl(o: { service: string; pro: string; date: string; period: string; notes: string }) {
  const lines = [
    `Olá, Doce Charme! Gostaria de solicitar um horário:`,
    ``,
    `• Serviço: ${o.service}`,
    ...(o.pro && o.pro !== NO_PREF ? [`• Profissional: ${o.pro}`] : []),
    `• Data preferida: ${fmtDate(o.date)}`,
    `• Período preferido: ${o.period || "A combinar"}`,
    ...(o.notes.trim() ? [`• Observação: ${o.notes.trim()}`] : []),
    ``,
    `Aguardo a confirmação da disponibilidade.`,
  ];
  return `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
