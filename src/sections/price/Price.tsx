import ButtonExpert from "@/src/components/button_expert";
import {
  ArrowsLeftRight,
  Barcode,
  CardsThree,
  CashRegister,
  ChartBar,
  CirclesThreePlus,
  FileArrowUp,
  HandArrowDown,
  HandArrowUp,
  HandCoins,
  HandDeposit,
  Invoice,
  Package,
  Scales,
  Sparkle,
} from "@phosphor-icons/react";
import { ReactNode } from "react";

export default function Price() {
  const planos: {
    plan: string;
    description: { label: string };
    description2: { label: string };
    recommended: boolean;
    fatures: { item: string; icon: ReactNode }[];
    price?: number;
  }[] = [
    {
      plan: "Sírus Pré Venda WEB + NFC-e",
      description: { label: "Funciona no Computador ou no Celular" },
      description2: {
        label: "01 Licença para computador + 01 licença para celular por",
      },
      recommended: false,
      fatures: [
        {
          item: "Cadastros",
          icon: <CirclesThreePlus weight="light" size={20} />,
        },
        { item: "Pedido de Venda", icon: <Invoice weight="light" size={20} /> },
        {
          item: "Comanda e Delivery",
          icon: <CardsThree weight="light" size={20} />,
        },
        {
          item: "Emissão de Pedido de Venda",
          icon: <HandDeposit weight="light" size={20} />,
        },
        {
          item: "Emissão de Cupom Fiscal NFC-e",
          icon: <FileArrowUp weight="light" size={20} />,
        },
        {
          item: "Controle de Estoque",
          icon: <Package weight="light" size={20} />,
        },
        {
          item: "Controle de Caixa",
          icon: <CashRegister weight="light" size={20} />,
        },
      ],
      price: 79.9,
    },
    {
      plan: "Sírius Pré Venda Safira",
      recommended: true,
      description: { label: "" },
      description2: { label: "01 Licença para computador por" },
      fatures: [
        // {
        //   item: "Cadastros",
        //   icon: <CirclesThreePlus weight="light" size={20} />,
        // },
        { item: "Pedido de Venda", icon: <Invoice weight="light" size={20} /> },
        {
          item: "Comanda e Delivery",
          icon: <CardsThree weight="light" size={20} />,
        },
        {
          item: "Emissão de Cupom Não Fiscal",
          icon: <HandDeposit weight="light" size={20} />,
        },
        {
          item: "Controle de Estoque",
          icon: <Package weight="light" size={20} />,
        },
        {
          item: "Controle de Caixa",
          icon: <CashRegister weight="light" size={20} />,
        },
        {
          item: "Financeiro a Pagar e a Receber",
          icon: <HandArrowUp weight="light" size={20} />,
        },
        // {
        //   item: "Financeiro a Receber",
        //   icon: <HandArrowDown weight="light" size={20} />,
        // },
        {
          item: "Pedido de Compra",
          icon: <HandCoins weight="light" size={20} />,
        },
        {
          item: "Balança e Código de Barras",
          icon: <Scales weight="light" size={20} />,
        },
        // {
        //   item: "Etiqueta de Código de Barras",
        //   icon: <Barcode weight="light" size={20} />,
        // },
        {
          item: "Troca e Devolução",
          icon: <ArrowsLeftRight weight="light" size={20} />,
        },
        {
          item: "Relatórios Gerenciais",
          icon: <ChartBar weight="light" size={20} />,
        },
      ],
      price: 99.9,
    },
    {
      plan: "Sírius SAT Prata - Cupom Fiscal",
      recommended: false,
      fatures: [
        {
          item: "Cadastros",
          icon: <CirclesThreePlus weight="light" size={20} />,
        },
        { item: "Pedido de Venda", icon: <Invoice weight="light" size={20} /> },
        {
          item: "Emissão de Cupom Fiscal SAT ou NFC-e",
          icon: <FileArrowUp weight="light" size={20} />,
        },
        {
          item: "Controle de Estoque",
          icon: <Package weight="light" size={20} />,
        },
        {
          item: "Controle de Caixa",
          icon: <CashRegister weight="light" size={20} />,
        },
        {
          item: "Relatórios Gerenciais",
          icon: <ChartBar weight="light" size={20} />,
        },
      ],
      price: 109.9,
      description: { label: "" },
      description2: { label: "01 Licença para computador por" },
    },
    {
      plan: "Personalizado",
      recommended: false,
      fatures: [
        {
          item: `Você monta o seu próprio pacote escolhendo os módulos que deseja utilizar.  Dispomos de ferramentas para controle fiscal e não fiscal e soluções voltadas para uso local, na web, no celular, pos e afins. Além disso, todas as nossas ferramentas trabalham de forma integrada. Fale com um especialista.`,
          icon: (
            <Sparkle
              weight="light"
              color="#C2410C"
              size={70}
              className="min-w-6"
            />
          ),
        },
      ],
      description: { label: "" },
      description2: { label: "" },
    },
  ];

  return (
    <section className="flex flex-col items-center gap-5 px-[1.9rem] py-[1.9rem] lg:px-[2.5rem]  lg:gap-10 ">
      <h2 className="text-sc font-extrabold text-2xl">
        Escolha o plano ideal para o seu negócio
      </h2>
      <div className="flex flex-col gap-1 justify-center md:grid md:grid-rows-2 md:grid-cols-2 xl:flex xl:flex-row ">
        {planos.map((_, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col gap-1 p-2 pt-2 rounded-md  ${_.recommended ? "bg-sc" : ""} `}
            >
              <span className="text-white font-bold h-6 pl-3">
                {_.recommended ? "Recomendado" : ""}
              </span>
              <div
                className={`flex flex-col flex-1 gap-4 justify-between px-4 py-8 bg-white rounded-md border transition ease-in-out delay-150 hover:drop-shadow-[0px_0px_10px_rgba(36,173,181,.75)] border-[#003658]/50 ${_.recommended ? "drop-shadow-[0px_0px_6px_rgba(36,173,181,1)]" : ""}  lg:px-8 lg:py-12 lg:gap-5 max-w-[18rem]`}
              >
                <div>
                  <h4 className="text-sc font-semibold text-2xl">{_.plan}</h4>
                  <p className="text-[#003658]/70 text-xs ">
                    {_.description.label}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {_.fatures.map((_, i) => {
                    return (
                      <li
                        key={i}
                        className="text-[#003658]/90 text-xs leading-5 flex items-center gap-2"
                      >
                        {_.icon}
                        <span>{_.item}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col gap-1 lg:gap-4">
                  <p className="text-[#003658]/70 text-xs ">
                    {_.description2.label}
                  </p>
                  <h3
                    className={`text-sc font-bold text-3xl ${_.price ? "" : "hidden"}`}
                  >
                    {_.price
                      ? new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(_.price)
                      : ""}
                    <span className="text-[#003658]/70 text-sm"> Mensais</span>
                  </h3>
                  <p className="text-[#003658]/70 text-xs ">
                    {_.plan === "Sírius SAT Prata - Cupom Fiscal"
                      ? "* Pode ser integrado as nossas ferramentas, tais como: Pré Venda, Comanda, Delivery e outras."
                      : ""}
                  </p>
                  <ButtonExpert
                    color={`orange`}
                    label="Fale com um especialista"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
