## Requisitos Funcionais:

-   Autenticação de Usuário:
    -   Os usuários devem ser capazes de se registrar e fazer login no sistema para acessar suas informações financeiras pessoais.
-   Gerenciamento de Salário:
    -   Os usuários podem adicionar seus salários mensais fixos ao sistema.
-   Gerenciamento de Rendas Extras:
    -   Os usuários podem registrar rendas adicionais que não são parte de seus salários fixos.
-   Gerenciamento de Despesas:
    -   Os usuários devem ser capazes de adicionar despesas de forma fácil e rápida, especificando o valor, categoria e data da despesa.
-   Gerenciamento de Despesas Fixas:
    -   Os usuários devem poder cadastrar despesas fixas recorrentes, como aluguel, contas de serviços públicos, entre outros.
-   Visualização de Saldo Mensal:
    -   Os usuários devem ser capazes de visualizar seu saldo atual após a dedução de despesas do ganho mensal.
-   Visualização de Gráficos:
    -   Os usuários devem poder visualizar gráficos representativos das suas despesas por categoria, permitindo uma análise visual de seus hábitos de gastos.
-   Geração de Relatórios:
    -   Os usuários devem ter a capacidade de gerar relatórios detalhados sobre suas finanças, incluindo despesas mensais, renda total e saldo disponível.
-   Dicas Financeiras:
    -   O sistema deve fornecer dicas personalizadas aos usuários sobre como economizar dinheiro e investir com base em suas finanças pessoais.

## Requisitos Não Funcionais:

-   Segurança:
    -   O sistema deve garantir a segurança das informações financeiras dos usuários, incluindo criptografia de dados e medidas de proteção contra acessos não autorizados.
-   Desempenho:
    -   O sistema deve ser responsivo e de rápido carregamento, mesmo com um grande volume de dados, garantindo uma experiência de usuário fluída.
-   Compatibilidade:
    -   O sistema deve ser compatível com uma variedade de navegadores web para garantir uma ampla acessibilidade.
-   Usabilidade:
    -   A interface do usuário deve ser intuitiva e fácil de usar, permitindo que os usuários naveguem facilmente pelas funcionalidades do sistema.
-   Disponibilidade:
    -   O sistema deve estar disponível para acesso 24 horas por dia, 7 dias por semana, com o mínimo de tempo de inatividade possível para manutenção.
-   Consistencia:
    -   O sistema deve apresentar dados consistentes a todo instante que o usuário acessar.
-   Confiabilidade:
    -   O sistema deve ser confiável e preciso na gestão das informações financeiras dos usuários, evitando perdas de dados ou erros de cálculo.
-   Internacionalização:
    -   O sistema deve ser capaz de suportar múltiplos idiomas e moedas, permitindo que usuários de diferentes regiões usem o sistema com facilidade.

## Requisitos de Domínio (Regras de Negócio):

-   Criptografia de Senha:
    -   O sistema deve criptografar as senhas dos usuários.
-   Usabilidade:
    -   O sistema deve mostrar os gastos separados por mês.
-   Diferenças entre movimentação fixa e variável:
    -   Movimentações fixas são cadastradas uma vez e são consideradas todos os meses.
    -   Movimentações variáveis serão apresentadas apenas naquele mês.

## Tradeoffs

-   Baixa complexidade
-   Disponibilidade e Consistência
-   Menor latência
-   Autententicação "básica"
-   Armazenamento em Disco

## Tecnologias:

-   Next.js Full Stack
-   Prisma
-   PostgreSQL
-   Typescript
