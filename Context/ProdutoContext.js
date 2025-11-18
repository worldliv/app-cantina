// vai puxar do Supabase as listas dos produtos

import { createContext, useState, useEffect } from "react";
import { supabase } from "../Supabase";
export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const listarProdutos = async () => {
    const { data, error } = await supabase.from("produtos").select("*");
    if (error) {  
      console.log("Erro ao listar produtos:", error);
      return [];
    }
    setProdutos(data);
    return data;
  };
  useEffect(() => {
    listarProdutos();
  }, []);
//  setProdutos = todos os produtos adicionados
  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos, listarProdutos }}>
      {children}
    </ProdutosContext.Provider>
  );
};