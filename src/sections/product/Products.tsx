"use client";

import Financeiro from "@/assets/Produtos-SVG/Financeiro.svg";
import ForcaDeVendas from "@/assets/Produtos-SVG/Forca-de-Vendas.svg";
import NotaFiscalEletronica from "@/assets/Produtos-SVG/Nota-Fiscal-Eletronica.svg";
import NotaFiscalServicos from "@/assets/Produtos-SVG/Nota-Fiscal-Servico.svg";
import PedidoVenda from "@/assets/Produtos-SVG/Ped-Vendas.svg";
import Producao from "@/assets/Produtos-SVG/Producao.svg";
import Cardapio from "@/assets/Produtos-SVG/cardapio.svg";
import Delivery from "@/assets/Produtos-SVG/delivery.svg";
import iFood from "@/assets/Produtos-SVG/ifood.svg";
import Tray from "@/assets/Produtos-SVG/logo_tray.svg";
import marketplace from "@/assets/Produtos-SVG/marketplace.svg";
import mercadoLivre from "@/assets/Produtos-SVG/mercado-livre.svg";
import otica from "@/assets/Produtos-SVG/otica.svg";
import pet from "@/assets/Produtos-SVG/pet.svg";
import webLojas from "@/assets/Produtos-SVG/web-lojas.svg";
import ButtonExpert from "@/src/components/button_expert";
import { Card, CardContent } from "@/src/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
  const [isMobile, setIsMobile] = useState(true);

  const cards: { image: any; label: string; description: string }[] = [
    {
      image: NotaFiscalEletronica,
      label: "Sírius S@T/NFC-e - Emissor de cupom fiscal",
      description:
        "Emissor de cupom fiscal homologado na SEFAZ com controle de estoque, caixa, financeiro e compras. Vendas através descrição ou código de barras. ",
    },
    {
      image: ForcaDeVendas,
      label: "Sírius Pré-Venda",
      description:
        "Emissor de pedido de venda (NÃO FISCAL) com controle de estoque, caixa, financeiro e compras. Vendas através descrição ou código de barras e integração com balança.",
    },
    {
      image: PedidoVenda,
      label: "Sírius Comanda",
      description:
        "Comandas para restaurantes, padarias, pizzarias, bares e entretenimento em geral. Abertura, fechamento e controle dos itens da comanda.",
    },
    {
      image: NotaFiscalServicos,
      label: "Sírius Nota Fiscal de Serviço",
      description:
        "Nota Fiscal de Serviço Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro.",
    },
    {
      image: Delivery,
      label: "Sírius Delivery",
      description: "Controle das entregas para o comércio em geral.",
    },
    {
      image: Financeiro,
      label: "Sírius NFE",
      description:
        "Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a SEFAZ. Atribuição de CFOP, CST e cálculos automatizados. Permite a baixa do estoque e o envio dos títulos ao contas a receber.",
    },
    {
      image: Cardapio,
      label: "Sírius Cardápio Digital",
      description:
        "Cardápio digital para o Food Service com opção de delivery.",
    },
    {
      image: Producao,
      label: "Sírius Integração IFood",
      description:
        "Captura os pedidos do iFood, monta o pedido de venda e executa o despacho de forma rápida e fácil.",
    },
    {
      image: webLojas,
      label: "Sírius WEB Lojas",
      description:
        "Tenha o controle de uma ou mais lojas através da WEB. Permite o cadastro dos produtos e o ajuste dos saldos das lojas, além da conferência das vendas e dos valores do caixa.",
    },
    {
      image: otica,
      label: "Sírius Óticas",
      description:
        "Controle de lentes, armações, marcas e modelos e controle das ordens de serviços.",
    },
    {
      image: pet,
      label: "Sírius Pet Shop",
      description:
        "Controle de raça, tipo de pelagem, tutor e vacinação, além de agendamentos, atendimentos e muito mais.",
    },
    {
      image: marketplace,
      label: "Sírius MarketPlace",
      description:
        "Integração completa com marketplaces populares, permitindo a gestão da sua loja. Sincronize produtos, preços, e promoções para maximizar suas vendas online.",
    },
  ];

  useEffect(() => {
    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function updateText() {
      if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    // Adiciona um ouvinte de evento de redimensionamento da janela
    window.addEventListener("resize", updateText);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateText);
    };
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center overflow-y-hidden py-5  ">
      <div className="flex flex-col gap-10 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl items-center w-full">
        <h2 className="p-5 font-extrabold text-sc2 text-2xl text-center ">
          Conheça as soluções da Soft Clever para o seu comércio varejista!
        </h2>

        <div className=" flex flex-col md:flex-row items-center gap-5 p-5 bg-sc h-full md:h-20 rounded-lg opacity-90">
          <p className="text-white">Integrações com:</p>
          <Image src={iFood} alt="logo ifood" width={60} />
          <Image src={Tray} alt="logo Tray" width={60} />
          <Image src={mercadoLivre} alt="logo Mercado Livre" width={60} />
        </div>

        <div className="flex flex-wrap gap-6 justify-center w-full ">
          {cards.map((_, index) => (
            <Card
              key={index}
              className="p-4 max-w-[17rem] min-h-[30rem] shadow-2xl "
            >
              <CardContent className="flex flex-col items-center gap-6">
                <Image
                  className="w-24 h-24 lg:w-32 lg:h-32"
                  alt={_.image}
                  src={_.image}
                />

                <h2 className=" w-full leading-5 text-center flex flex-row justify-center items-center font-bold text-2xl lg:text-[1.14rem] text-sc  ">
                  {_.label}
                </h2>
                <p className="text-justify text-sc lg:text-sm ">
                  {_.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="px-6">
          <ButtonExpert
            color={"orange"}
            label="Quero decolar o meu negócio"
            animation="animate-pulse"
          />
        </div>
      </div>
    </section>
  );
}
