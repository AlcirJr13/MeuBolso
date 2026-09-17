# SPEC - Sistema de Controle Financeiro Pessoal
**Versão:** 1.0  
**Data:** Setembro/2026  
**Status:** Em Desenvolvimento

---

## 📋 ÍNDICE

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Objetivos e Metas](#2-objetivos-e-metas)
3. [Stack Tecnológica](#3-stack-tecnológica)
4. [Arquitetura do Sistema](#4-arquitetura-do-sistema)
5. [Estrutura de Banco de Dados](#5-estrutura-de-banco-de-dados)
6. [Funcionalidades Detalhadas](#6-funcionalidades-detalhadas)
7. [Estrutura de Pastas do Projeto](#7-estrutura-de-pastas-do-projeto)
8. [Git Flow e Versionamento](#8-git-flow-e-versionamento)
9. [Requisitos Funcionais e Não-Funcionais](#9-requisitos-funcionais-e-não-funcionais)
10. [Fluxos de Usuário](#10-fluxos-de-usuário)
11. [Plano de Implementação](#11-plano-de-implementação)
12. [Considerações Finais](#12-considerações-finais)

---

## 1. VISÃO GERAL DO PROJETO

### 1.1. Nome do Projeto
**Sugestões:**
- **FinPocket** (sugestão principal)
- **GranaControl**
- **MeuBolso+**
- **ContaCerta**

*Nota: Escolheremos juntos o nome final*

### 1.2. Descrição
Aplicativo multiplataforma (Web, Android e iOS) para controle financeiro pessoal, com foco em:
- Gestão de receitas, despesas e aportes
- Planejamento orçamentário com metodologia 50/30/20
- Metas de poupança (cofrinhos)
- Acompanhamento de investimentos
- Dashboard interativo e relatórios

### 1.3. Público-Alvo
Pessoas físicas que desejam controlar suas finanças pessoais de forma simples, visual e eficiente, com possibilidade de uso tanto no computador quanto no celular.

---

## 2. OBJETIVOS E METAS

### 2.1. Objetivos Principais
✅ Permitir o controle completo das finanças pessoais  
✅ Facilitar o acompanhamento de metas financeiras  
✅ Educar financeiramente através da metodologia 50/30/20  
✅ Fornecer insights e alertas sobre saúde financeira  
✅ Ser 100% gratuito e de código aberto  

### 2.2. Metas de Aprendizado
✅ Aprender Vue.js do zero  
✅ Dominar Git Flow (branches main e staging)  
✅ Implementar banco de dados relacional  
✅ Criar aplicativo mobile multiplataforma  
✅ Entender conceitos de CI/CD e deploy  

---

## 3. STACK TECNOLÓGICA

### 3.1. Frontend (Web e Mobile)

**Framework Principal:**
- **Vue.js 3** (Composition API)
  - Motivo: Curva de aprendizado suave, documentação excelente, comunidade ativa
  
**Roteamento:**
- **Vue Router 4**
  - Navegação entre páginas/abas
  
**Gerenciamento de Estado:**
- **Pinia**
  - Substituto moderno do Vuex, mais simples e intuitivo

**UI Framework:**
- **Tailwind CSS** + **Headless UI**
  - Motivo: Flexibilidade total, gratuito, performance excelente
  - Alternativa: **Vuetify** ou **Quasar** (componentes prontos)

**Gráficos:**
- **Chart.js** + **Vue-ChartJS**
  - Motivo: Gratuito, simples, interativo

**PWA (Progressive Web App):**
- **Vite PWA Plugin**
  - Permite instalar o app web no celular como se fosse nativo

### 3.2. Backend e Banco de Dados

**Opção Recomendada (Mais Simples):**
- **Supabase** (Backend-as-a-Service)
  - PostgreSQL gratuito (500MB)
  - Autenticação pronta
  - API REST e Realtime automáticas
  - Hospedagem inclusa
  
**Opção Alternativa (Mais Controle):**
- **Node.js** + **Express** (API)
- **PostgreSQL** (banco de dados)
- **Railway.app** ou **Render.com** (hospedagem gratuita)

*Recomendação inicial: Supabase (mais rápido para começar)*

### 3.3. Mobile

**Abordagem Híbrida:**
- **Capacitor.js**
  - Transforma o app Vue.js em app Android/iOS
  - Mesmo código base do web
  - Acesso a recursos nativos do celular
  
**Alternativa PWA:**
- O próprio PWA pode ser "instalado" no celular
- Mais simples, mas com menos recursos nativos

### 3.4. Controle de Versão e Deploy

**Git:**
- GitHub (repositório remoto gratuito)

**Branches:**
- `main` → Produção (app estável)
- `staging` → Homologação (testes antes de produção)
- `feature/*` → Novas funcionalidades em desenvolvimento

**Deploy Web:**
- **Vercel**
  - Gratuito, integração automática com GitHub
  - Deploy automático a cada push
  
**Deploy Mobile:**
- **Google Play Console** (Android) - taxa única $25
- **Apple App Store** (iOS) - taxa anual $99
- *Nota: Para testes, podemos gerar APK/IPA sem publicar*

### 3.5. Ferramentas de Desenvolvimento

- **VS Code** (editor)
- **Node.js 18+** (runtime)
- **Git** (controle de versão)
- **Postman** ou **Insomnia** (testar API)
- **DBngin** ou **DBeaver** (gerenciar banco de dados)

---

## 4. ARQUITETURA DO SISTEMA

### 4.1. Diagrama de Arquitetura

```
─────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   Web App   │  │  Android    │  │     iOS     │    │
│  │  (Vue.js)   │  │ (Capacitor) │  │ (Capacitor) │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│                    CAMADA DE API                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │           Supabase (Backend-as-a-Service)       │   │
│  │  - Autenticação (Auth)                          │   │
│  │  - Banco de Dados (PostgreSQL)                  │   │
│  │  - Storage (anexos)                             │   │
│  │  - API REST automática                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│                    BANCO DE DADOS                       │
│              PostgreSQL (Supabase Free Tier)            │
│                     500MB gratuitos                     │
└─────────────────────────────────────────────────────────┘
```

### 4.2. Fluxo de Dados

```
Usuário → Interface Vue.js → Pinia (Estado) → Supabase Client → API Supabase → PostgreSQL
```

### 4.3. Segurança

- Autenticação por email/senha ou Google (métodos primários)
- JWT (JSON Web Tokens) para sessões com refresh token
- Row Level Security (RLS) no PostgreSQL
- Cada usuário vê apenas seus próprios dados
- HTTPS obrigatório
- Senhas criptografadas com bcrypt
- OAuth 2.0 para autenticação com Google

---

## 5. ESTRUTURA DE BANCO DE DADOS

### 5.1. Diagrama Entidade-Relacionamento (DER)

```
┌─────────────────┐       ┌─────────────────┐
│     USERS       │       │   CATEGORIES    │
├─────────────────┤       ├─────────────────┤
│ id (PK)         │       │ id (PK)         │
│ email           │       │ user_id (FK)    │
│ name            │       │ name            │
│ created_at      │       │ type            │
│ updated_at      │       │ parent_id (FK)  │
└─────────────────┘       │ is_custom       │
        │                 └─────────────────┘
        │                          │
        │                          │
┌───────┴────────┐        ┌────────────────┐
│                │        │                 │
│  ┌─────────────▼────┐   │  ┌──────────────▼──────┐
│  │  TRANSACTIONS    │   │  │   SUBCATEGORIES     │
│  ├──────────────────┤   │  ├─────────────────────┤
│  │ id (PK)          │   │  │ id (PK)             │
│  │ user_id (FK)     │   │  │ category_id (FK)    │
│  │ type             │   │  │ name                │
│  │ amount           │   │  │ is_custom           │
│  │ category_id (FK) │   │  └─────────────────────┘
│  │ subcategory_id   │   │
│  │ description      │   │
│  │ date             │   │
│  │ payment_method   │   │
│  │ status           │   │
│  │ classification   │   │
│  │ installment      │   │
│  │ card_id (FK)     │   │
│  │ created_at       │   │
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │   CREDIT_CARDS   │   │
│  ├──────────────────┤   │
│  │ id (PK)          │   │
│  │ user_id (FK)     │   │
│  │ name             │   │
│  │ closing_day      │   │
│  │ due_day          │   │
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │    SAVINGS_GOALS │   │
│  │   (COFRINHOS)    │   │
│  ├──────────────────┤   │
│  │ id (PK)          │   │
│  │ user_id (FK)     │   │
│  │ name             │   │
│  │ target_amount    │   │
│  │ current_amount   │   │
│  │ deadline         │   │
│  │ category         │   │
│  │ color            │   │
│  │ description      │   │
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │ INVESTMENTS      │   │
│  ├──────────────────┤   │
│  │ id (PK)          │   │
│  │ user_id (FK)     │   │
│  │ type             │   │
│  │ asset_name       │   │
│  │ ticker           │   │
│  │ quantity         │   │
│  │ amount           │   │
│  │ date             │   │
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │   BUDGETS        │   │
│  ├──────────────────┤   │
│  │ id (PK)          │   │
│  │ user_id (FK)     │   │
│  │ category_id (FK) │   │
│  │ month            │   │
│  │ year             │   │
│  │ budget_amount    │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

### 5.2. Tabelas Detalhadas

#### **users** (usuários)
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255), -- NULLABLE: usuários Google não têm senha
    name VARCHAR(255),
    avatar_url VARCHAR(500),
    auth_provider VARCHAR(20) DEFAULT 'email', -- 'email', 'google'
    provider_id VARCHAR(255), -- ID do usuário no provedor (Google ID)
    email_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice para busca por provider
CREATE INDEX idx_users_provider ON users(auth_provider, provider_id);
```

#### **categories** (categorias)
```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL, -- 'expense', 'income', 'investment'
    parent_id UUID REFERENCES categories(id),
    icon VARCHAR(50),
    color VARCHAR(7),
    is_custom BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categorias padrão (seed)
INSERT INTO categories (name, type, is_custom) VALUES
('Moradia', 'expense', false),
('Alimentação', 'expense', false),
('Transporte', 'expense', false),
('Saúde', 'expense', false),
('Educação', 'expense', false),
('Lazer', 'expense', false),
('Compras', 'expense', false),
('Assinaturas', 'expense', false),
('Impostos', 'expense', false),
('Financiamentos', 'expense', false),
('Salário', 'income', false),
('Renda Extra', 'income', false),
('Investimentos', 'investment', false);
```

#### **subcategories** (subcategorias)
```sql
CREATE TABLE subcategories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    is_custom BOOLEAN DEFAULT true
);

-- Exemplo de subcategorias padrão
INSERT INTO subcategories (category_id, name, is_custom) VALUES
-- Moradia
(1, 'Aluguel/Condomínio', false),
(1, 'Energia Elétrica', false),
(1, 'Água', false),
(1, 'Internet', false),
(1, 'Gás', false),
(1, 'Limpeza', false),
(1, 'Manutenção', false),
-- Alimentação
(2, 'Supermercado', false),
(2, 'Restaurantes e Delivery', false),
(2, 'Padaria', false),
(2, 'Lanches', false);
-- ... e assim por diante
```

#### **credit_cards** (cartões de crédito)
```sql
CREATE TABLE credit_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    closing_day INTEGER NOT NULL, -- Dia do fechamento (1-31)
    due_day INTEGER NOT NULL,     -- Dia do vencimento (1-31)
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **transactions** (lançamentos)
```sql
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL, -- 'expense', 'income', 'investment'
    amount DECIMAL(12,2) NOT NULL,
    category_id UUID REFERENCES categories(id),
    subcategory_id UUID REFERENCES subcategories(id),
    description TEXT,
    date DATE NOT NULL,
    payment_method VARCHAR(50), -- 'pix', 'credit_card', 'debit', 'boleto', 'cash', 'transfer'
    status VARCHAR(20) DEFAULT 'paid', -- 'paid', 'pending'
    classification VARCHAR(20), -- 'essential', 'important', 'luxury'
    installment_number INTEGER, -- Número da parcela (1, 2, 3...)
    installment_total INTEGER,  -- Total de parcelas (12, 24...)
    card_id UUID REFERENCES credit_cards(id),
    reference_month INTEGER,    -- Mês de referência (1-12)
    reference_year INTEGER,     -- Ano de referência (YYYY)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice para performance
CREATE INDEX idx_transactions_user_date ON transactions(user_id, date);
CREATE INDEX idx_transactions_category ON transactions(category_id);
```

#### **savings_goals** (cofrinhos/metas)
```sql
CREATE TABLE savings_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    target_amount DECIMAL(12,2) NOT NULL,
    current_amount DECIMAL(12,2) DEFAULT 0,
    initial_amount DECIMAL(12,2) DEFAULT 0,
    deadline DATE,
    category VARCHAR(50), -- 'short_term', 'medium_term', 'long_term', 'dream', 'emergency'
    color VARCHAR(7) DEFAULT '#10B981',
    description TEXT,
    priority VARCHAR(20) DEFAULT 'medium', -- 'high', 'medium', 'low'
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **investments** (investimentos)
```sql
CREATE TABLE investments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- 'emergency_reserve', 'fixed_income', 'stocks', 'fiis'
    asset_name VARCHAR(100) NOT NULL,
    ticker VARCHAR(20), -- Código do ativo (ex: PETR4, HGLG11)
    quantity DECIMAL(12,4), -- Quantidade de ações/cotas
    amount DECIMAL(12,2) NOT NULL, -- Valor aportado
    purchase_date DATE NOT NULL,
    brokerage VARCHAR(100), -- Corretora
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **budgets** (orçamentos)
```sql
CREATE TABLE budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id),
    month INTEGER NOT NULL,
    year INTEGER NOT NULL,
    budget_amount DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, category_id, month, year)
);
```

#### **user_settings** (configurações do usuário)
```sql
CREATE TABLE user_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    currency VARCHAR(3) DEFAULT 'BRL',
    language VARCHAR(5) DEFAULT 'pt-BR',
    budget_method VARCHAR(20) DEFAULT '50_30_20', -- '50_30_20', 'custom'
    essential_percentage DECIMAL(5,2) DEFAULT 50.00,
    important_percentage DECIMAL(5,2) DEFAULT 30.00,
    luxury_percentage DECIMAL(5,2) DEFAULT 20.00,
    monthly_income_target DECIMAL(12,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5.3. Row Level Security (RLS)

```sql
-- Habilitar RLS em todas as tabelas
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE savings_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança (exemplo para transactions)
CREATE POLICY "Users can only see their own transactions"
ON transactions FOR ALL
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Repetir para todas as tabelas sensíveis
```

---

## 6. FUNCIONALIDADES DETALHADAS

### 6.1. Módulo de Autenticação

**Funcionalidades:**
- [ ] Cadastro de usuário (email + senha)
- [ ] Cadastro de usuário (Google)
- [ ] Login (email + senha)
- [ ] Login (Google)
- [ ] Logout
- [ ] Recuperação de senha
- [ ] Vinculação de conta (usuário logado pode vincular método alternativo)

**Métodos de Autenticação:**

| Método | Cadastro | Login |
|--------|----------|-------|
| Email + Senha | ✅ Obrigatório: nome, email, senha | ✅ Email + senha |
| Google | ✅ One-click (captura nome, email, foto) | ✅ One-click |

**Telas:**
- `/login` - Formulário de login (email/senha + botão Google)
- `/register` - Formulário de cadastro (email/senha + botão Google)
- `/forgot-password` - Recuperação de senha
- `/settings` - Vincular/gerenciar métodos de autenticação

**Fluxo de Cadastro por Google:**
```
1. Usuário clica "Cadastrar com Google"
2. Redireciona para tela de consentimento Google
3. Usuário autoriza acesso (nome, email, foto)
4. Sistema cria conta automaticamente
5. Redireciona para configuração inicial
```

**Fluxo de Cadastro por Email/Senha:**
```
1. Usuário preenche: nome, email, senha, confirmar senha
2. Validação: senha mínima 6 caracteres, email único
3. Sistema envia email de confirmação (opcional)
4. Redireciona para configuração inicial
```

**Regras de Vinculação:**
- Usuário cadastrado por Google pode adicionar senha depois
- Usuário cadastrado por email pode vincular Google depois
- Usuário não pode ter dois métodos do mesmo tipo

### 6.2. Dashboard Principal (Home)

**URL:** `/dashboard`

**Componentes:**

#### 6.2.1. Header
- Nome do usuário
- Seletor de mês/ano
- Botão "Lançamento Rápido" (flutuante)
- Menu de navegação

#### 6.2.2. Card: Saúde Financeira
**Dados exibidos:**
- Score (0-100) calculado automaticamente
- Classificação: "Excelente", "Boa", "Regular", "Atenção", "Crítica"
- Mês de referência
- Data da última atualização

**Cálculo do Score:**
```javascript
function calculateFinancialHealthScore(userData) {
    let score = 100;
    
    // Fator 1: Taxa de poupança (30 pontos)
    const savingsRate = (userData.savings / userData.income) * 100;
    if (savingsRate >= 25) score += 0;
    else if (savingsRate >= 15) score -= 10;
    else if (savingsRate >= 5) score -= 20;
    else score -= 30;
    
    // Fator 2: Reserva de emergência (25 pontos)
    const emergencyMonths = userData.emergencyReserve / userData.monthlyExpenses;
    if (emergencyMonths >= 6) score += 0;
    else if (emergencyMonths >= 3) score -= 10;
    else if (emergencyMonths >= 1) score -= 20;
    else score -= 25;
    
    // Fator 3: Dívidas (25 pontos)
    if (userData.debts === 0) score += 0;
    else if (userData.debts < userData.income * 0.3) score -= 10;
    else score -= 25;
    
    // Fator 4: Orçamento estourado (20 pontos)
    if (userData.expenses <= userData.budget) score += 0;
    else score -= 20;
    
    return Math.max(0, Math.min(100, score));
}
```

#### 6.2.3. Cards KPI (Key Performance Indicators)

**Card 1: Saldo do Mês**
```
┌─────────────────────┐
│ SALDO DO MÊS        │
│ R$ 5.741,60         │
│ Saldo Livre: R$ X   │
└─────────────────────┘
```

**Card 2: Receitas do Mês**
```
┌─────────────────────┐
│ RECEITAS            │
│ R$ 14.180,00        │
│ ↑ 3 transações      │
└─────────────────────┘
```

**Card 3: Despesas do Mês**
```
─────────────────────┐
│ DESPESAS            │
│ R$ 5.288,40         │
│ 52% do teto         │
└─────────────────────┘
```

**Card 4: Taxa de Poupança**
```
─────────────────────┐
│ POUPANÇA            │
│ 62.7%               │
│ Aportes: R$ 3.150   │
└─────────────────────┘
```

#### 6.2.4. Card: Alertas e Tomada de Decisão

**Alertas:**
- ⚠️ Orçamento estourado? [Status]
-  Poupança abaixo da meta? [Status]
- 💳 Dívidas pressionando? [Status]
- 📊 Classificação 50/30/20 [Barras de progresso]

#### 6.2.5. Card: Gráfico de Distribuição de Despesas

**Tipo:** Gráfico de pizza (donut) interativo

**Funcionalidades:**
- Visualização por categoria
- Clique na fatia → filtra transações daquela categoria
- Seletor: "Este mês" / "Últimos 3 meses" / "Todos"
- Legenda com porcentagens

**Biblioteca:** Chart.js

#### 6.2.6. Card: Despesas por Categoria (Orçado vs. Realizado)

**Layout:** Lista com barras de progresso

**Exemplo:**
```
Moradia        R$ 2.785,30 de R$ 3.200  [████████░░] 87% ⚠️
Alimentação    R$ 1.051,80 de R$ 1.800  [█████░░░░░] 58% ✓
Transporte     R$ 346,50 de R$ 900      [███░░░░░░░] 39% ✓
```

**Cores:**
- Verde: < 70% consumido
- Laranja: 70-90% consumido  
- Vermelho: > 90% consumido

#### 6.2.7. Card: Carteira de Investimentos

**Dados:**
- Patrimônio total alocado
- Número de ativos
- Distribuição por classe (Reserva, RF, Ações, FIIs)
- Link "Ver carteira completa"

#### 6.2.8. Card: Cofrinhos (Metas de Poupança)

**Visualização:**
- Mini cards dos cofrinhos ativos
- Barra de progresso de cada um
- % alcançado
- Link "Gerenciar metas completas"

### 6.3. Lançamento Rápido

**Componente:** Modal/Drawer flutuante

**Aba 1: Despesa**

**Campos:**
```
Tipo: ○ Despesa ● Receita ○ Aporte

Data: [date picker]
Valor: R$ [input number]
Categoria: [select dropdown]
  ├─ Moradia
  ├─ Alimentação
  ├─ Transporte
  ├─ Saúde
  ├─ Educação
  ├─ Lazer
  ├─ Compras
  ├─ Assinaturas
  ├─ Impostos
  └─ Financiamentos

Subcategoria: [select dinâmico baseado na categoria]
  (Ex: Se Moradia → Aluguel, Energia, Água...)

Descrição: [text input]

Meio de Pagamento: [select]
  ├─ Pix
  ├─ Cartão de Crédito
  ├─ Débito
  ├─ Boleto
  ├─ Espécie
  └─ Transferência

Se Cartão de Crédito:
  Cartão: [select dos cartões cadastrados]
  Parcelas: [number input] (1-48)
  
  Observação: Sistema calcula automaticamente
  em qual mês cada parcela será lançada baseado
  na data de fechamento da fatura.

Status: ○ Pago ○ Pendente

Classificação:
  ○ Essencial (verde)
  ○ Importante (laranja)
  ○ Luxo (rosa)

[Botão Salvar]
```

**Aba 2: Receita**

**Campos:**
```
Tipo: ○ Despesa ● Receita ○ Aporte

Data: [date picker]
Valor: R$ [input number]
Categoria: [select]
  ├─ Salário
  ├─ Pro-labore/PJ
  ├─ Renda Extra
  ├─ Rendimentos de Investimentos
  └─ [Outras personalizadas]

Subcategoria: [opcional]
Descrição: [opcional]

[Botão Salvar]
```

**Aba 3: Aporte**

**Campos:**
```
Tipo: ○ Despesa ● Receita ○ Aporte

Data: [date picker]
Valor: R$ [input number]
Destino: ○ Investimentos ○ Cofrinhos

Se Investimentos:
  Tipo de Ativo: [select]
    ├─ Reserva de Emergência
    ├─ Renda Fixa
    ├─ Ações
    ─ FIIs
  
  Nome do Ativo/Ticker: [input text]
  Quantidade: [input number]
  Corretora: [input text]

Se Cofrinhos:
  Cofrinho: [select dos cofrinhos ativos]

[Botão Salvar]
```

### 6.4. Página: Lançamentos (Banco de Dados)

**URL:** `/transactions`

**Funcionalidades:**

#### 6.4.1. Tabela de Lançamentos

**Colunas:**
- ID (tx-001, tx-002...)
- Data
- Mês/Ano
- Tipo (ícone ↑ Receita / ↓ Despesa / → Aporte)
- Categoria
- Subcategoria
- Descrição
- Valor (formatado R$)
- Meio de Pagamento
- Classificação (badge colorido)
- Status (Pago/Pendente)
- Ações (Editar, Excluir)

#### 6.4.2. Filtros

**Filtros disponíveis:**
- Busca textual (descrição, categoria)
- Período (data início/fim)
- Tipo (Receita/Despesa/Aporte)
- Categoria (multi-select)
- Classificação (Essencial/Importante/Luxo)
- Meio de Pagamento
- Status (Pago/Pendente)

#### 6.4.3. Ações em Massa

- [ ] Selecionar todos
- [ ] Exportar CSV
- [ ] Copiar para Google Sheets
- [ ] Excluir selecionados

#### 6.4.4. Paginação

- 10, 25, 50, 100 registros por página
- Navegação: Anterior / Próxima
- Info: "Mostrando 1-25 de 143 registros"

### 6.5. Página: Planejamento e Orçamento

**URL:** `/budget`

**Funcionalidades:**

#### 6.5.1. Configuração de Tetos

**Tela de configuração:**
```
Mês/Ano: [Setembro/2026]

TETO ORÇADO TOTAL: R$ 10.130,00

Categorias:
┌─────────────────────────────────────────┐
│ Moradia                                 │
│ Orçado: R$ 3.200,00  [slider ou input] │
│                                         │
│ Classificação: ● Essencial              │
─────────────────────────────────────────┘

─────────────────────────────────────────┐
│ Alimentação                             │
│ Orçado: R$ 1.800,00  [slider ou input] │
│                                         │
│ Classificação: ● Essencial              │
─────────────────────────────────────────┘

[Botão Salvar Orçamento]
```

#### 6.5.2. Dashboard 50/30/20

**Cards:**
```
┌─────────────────────────────────────────┐
│ ESSENCIAIS (Meta: 50%)                  │
│                                         │
│ R$ 4.619,60 de R$ 7.050                │
│ [████████████░░░░░░░░] 66%             │
│                                         │
│ Status: ️ Atenção (próximo do limite) │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ IMPORTANTES (Meta: 30%)                 │
│                                         │
│ R$ 374,80 de R$ 1.330                  │
│ [███░░░░░░░░░░░░░░░░░] 28%             │
│                                         │
│ Status: ✓ No limite                    │
─────────────────────────────────────────┘

─────────────────────────────────────────┐
│ SUPÉRFLUOS/LUXO (Meta: 20%)             │
│                                         │
│ R$ 294,00 de R$ 1.750                  │
│ [██░░░░░░░░░░░░░░░░░░] 17%             │
│                                         │
│ Status: ✓ No limite                    │
─────────────────────────────────────────┘
```

#### 6.5.3. Tabela Detalhada

**Colunas:**
- Categoria
- Classificação (badge)
- Orçado Mensal (R$)
- Realizado (R$)
- Saldo Restante (R$)
- Progresso de Consumo (barra + %)
- Status (ícone + texto)

**Status:**
- ✓ No Limite (verde) - < 70%
- ⚠️ Atenção (laranja) - 70-90%
- 🚫 Estourado (vermelho) - > 90%

### 6.6. Página: Metas de Poupança (Cofrinhos)

**URL:** `/savings-goals`

**Funcionalidades:**

#### 6.6.1. Cards de Resumo

**No topo da página:**
```
┌─────────────────────────────────────────┐
│ TOTAL JÁ POUPADO                        │
│ R$ 151.170,00                           │
│ De uma meta total de R$ 195.000        │
─────────────────────────────────────────┘

─────────────────────────────────────────┐
│ PROGRESSO MÉDIO                         │
│ 77.5%                                   │
│ [████████████████░░░]                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ RITMO DE POUPANÇA                       │
│ R$ 3.150/mês                            │
│ Baseado nos aportes mensais             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FALTANTE GLOBAL                         │
│ R$ 43.830,00                            │
│ Tempo estimado: ~14 meses               │
└─────────────────────────────────────────┘
```

#### 6.6.2. Filtros por Categoria

**Tabs:**
- Todas
- Reserva
- Curto Prazo (< 1 ano)
- Médio Prazo (1-3 anos)
- Longo Prazo (> 3 anos)
- Sonhos

#### 6.6.3. Card de Cofrinho

**Layout:**
```
┌─────────────────────────────────────────┐
│ [TAG: RESERVA] [TAG: Alta Prioridade]   │
│                                         │
│ Reserva de Emergência (6 meses)         │
│                                         │
│ R$ 36.850,00           Alvo: R$ 45.000  │
│                                         │
│ [████████████████████░] 81.9%           │
│                                         │
│ Faltam R$ 8.150                         │
│                                         │
│ 📅 Prazo: Dezembro/2026                │
│ ⏱️ Tempo Estimado: Nov/2027 (~14 meses)│
│ 💰 Ritmo mensal: R$ 586/mês            │
│                                         │
│ [✏️ Editar] [🗑️ Excluir]               │
└─────────────────────────────────────────┘
```

**Cores personalizáveis:**
- Verde: Reserva
- Azul: Longo Prazo
- Roxo: Médio Prazo
- Laranja: Curto Prazo
- Rosa: Sonhos

#### 6.6.4. Criar/Editar Cofrinho

**Modal:**
```
NOVA META DE POUPANÇA

Nome da Meta: [input text]
Ex: "Viagem para Europa", "Carro Novo"

Valor Total da Meta: R$ [input number]

Valor Inicial: R$ [input number]
(Deixe 0 se começar do zero)

Prazo:
  ○ Data específica: [date picker]
  ○ Indeterminado

Categoria:
  ○ Reserva de Emergência
  ○ Curto Prazo (< 1 ano)
  ○ Médio Prazo (1-3 anos)
  ○ Longo Prazo (> 3 anos)
  ○ Sonho

Cor do Card: [color picker]
[🟢] [🔵] [🟣] [] [🔴] []

Descrição/Motivação:
[textarea]
"Por que quero atingir essa meta?"

Prioridade:
  ○ Alta
  ○ Média
  ○ Baixa

[Botão Salvar] [Cancelar]
```

#### 6.6.5. Aporte em Cofrinho

**Botão "Aportar" em cada card:**
```
APORTE EM COFRINHO

Cofrinho: Reserva de Emergência
Valor atual: R$ 36.850,00
Meta: R$ 45.000,00

Valor do Aporte: R$ [input]

[Confirmar Aporte]
```

### 6.7. Página: Investimentos e Carteira

**URL:** `/investments`

**Funcionalidades:**

#### 6.7.1. Cards de Resumo

```
┌─────────────────────────────────────────┐
│ PATRIMÔNIO ATUAL                        │
│ R$ 100.020,00                           │
│ Custo investido: R$ 90.700             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ LUCRO DE CAPITAL                        │
│ +R$ 9.320,00                            │
│ Rentabilidade geral: +10.28%           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ APORTES SETEMBRO/2026                   │
│ R$ 3.150,00                             │
│ Meta mensal: R$ 3.500,00               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ RESERVA DE EMERGÊNCIA                   │
│ 6.0 meses                               │
│ R$ 36.850 em liquidez diária           │
└─────────────────────────────────────────┘
```

#### 6.7.2. Divisão Estratégica da Carteira

**Cards por classe de ativo:**
```
┌─────────────────────────────────────────┐
│ Reserva de Emergência                   │
│                                         │
│ R$ 36.850,00                            │
│                                         │
│ Atual: 36.8%    Alvo: 35%              │
│ [████████████████░░░░]                  │
│                                         │
│ [Botão Aportar]                         │
─────────────────────────────────────────┘

─────────────────────────────────────────┐
│ Renda Fixa                              │
│                                         │
│ R$ 24.180,00                            │
│                                         │
│ Atual: 24.2%    Alvo: 25%              │
│ [█████████████████░░]                   │
│                                         │
│ [Botão Aportar]                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Fundos Imobiliários (FIIs)              │
│                                         │
│ R$ 25.750,00                            │
│                                         │
│ Atual: 25.7%    Alvo: 30%              │
│ [██████████████████░]                   │
│                                         │
│ [Botão Aportar]                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Renda Variável / Ações                  │
│                                         │
│ R$ 13.240,00                            │
│                                         │
│ Atual: 13.2%    Alvo: 10%              │
│ [███████████░░░░░░░░]                   │
│                                         │
│ [Botão Aportar]                         │
└─────────────────────────────────────────┘
```

#### 6.7.3. Tabela de Ativos e Posições

**Colunas:**
- Ativo (nome completo)
- Ticker/Código (ex: LFT2029, HGLG11)
- Classe (Reserva, RF, FIIs, Ações)
- Custódia (Corretora)
- Valor Investido (R$)
- Valor Atual (R$)*
- Rentabilidade Total (%)
- Peso na Carteira (%)

**Nota importante:**
```
⚠️ AVISO: Os valores exibidos representam os 
aportes realizados, não o valor atual de 
mercado dos ativos. Para cotações em tempo 
real, consulte sua corretora.
```

#### 6.7.4. Registrar Novo Aporte

**Modal:**
```
NOVO APORTE DE INVESTIMENTO

Data: [date picker]
Valor: R$ [input number]

Tipo de Ativo:
  ○ Reserva de Emergência
  ○ Renda Fixa
  ○ Ações
  ○ FIIs

Nome do Ativo: [input text]
Ticker (opcional): [input text]
Ex: PETR4, HGLG11, LFT2029

Quantidade: [input number]
Valor Unitário: R$ [input number]
Valor Total: R$ [auto-calculate]

Corretora: [input text]
Ex: NuInvest, XP, BTG, Inter

Observações: [textarea]

[Salvar Aporte]
```

### 6.8. Página: Cartões de Crédito

**URL:** `/credit-cards`

**Funcionalidades:**

#### 6.8.1. Cadastrar Cartão

**Formulário:**
```
NOVO CARTÃO DE CRÉDITO

Nome do Cartão: [input text]
Ex: "Nubank", "Inter", "Bradesco Visa"

Dia do Fechamento: [number 1-31]
Dia em que a fatura fecha

Dia do Vencimento: [number 1-31]
Dia em que a fatura vence

[Salvar Cartão]
```

#### 6.8.2. Lista de Cartões

**Card:**
```
┌─────────────────────────────────────────┐
│ NUBANK                                  │
│                                         │
│ Fechamento: Dia 20                      │
│ Vencimento: Dia 28                      │
│                                         │
│ Fatura Atual: R$ 2.450,00              │
│                                         │
│ [✏️ Editar] [️ Excluir]               │
─────────────────────────────────────────┘
```

#### 6.8.3. Lógica de Parcelamento

**Cenário 1: Compra antes do fechamento**
```
Data da compra: 18/09
Fechamento: 20/09
Vencimento: 28/09
Parcelas: 12x

Resultado:
1ª parcela: Vence 28/09 (fatura de setembro)
2ª parcela: Vence 28/10 (fatura de outubro)
...
12ª parcela: Vence 28/08 (fatura de agosto/2027)
```

**Cenário 2: Compra após o fechamento**
```
Data da compra: 22/09
Fechamento: 20/09
Vencimento: 28/09
Parcelas: 12x

Resultado:
1ª parcela: Vence 28/10 (fatura de outubro)
2ª parcela: Vence 28/11
...
12ª parcela: Vence 28/09/2027
```

**Cenário 3: Compra próxima ao fechamento (ajuste manual)**
```
Data da compra: 18/09
Fechamento: 20/09

Sistema detecta: "Compra próxima ao fechamento"
Pergunta: "Em qual mês deseja iniciar o parcelamento?"
  ○ Setembro/2026 (fatura atual)
  ○ Outubro/2026 (próxima fatura)
```

### 6.9. Configurações e Personalização

**URL:** `/settings`

**Funcionalidades:**

#### 6.9.1. Perfil do Usuário

- Nome
- Email
- Foto de perfil
- Alterar senha

#### 6.9.2. Preferências

- Moeda (padrão: BRL - Real Brasileiro)
- Idioma (padrão: pt-BR)
- Tema (Claro/Escuro/Automático)
- Primeiro dia da semana (Domingo/Segunda)

#### 6.9.3. Configurações de Orçamento

- Método: 50/30/20 ou Personalizado
- Se personalizado:
  - % Essenciais: [input]
  - % Importantes: [input]
  - % Luxo: [input]

#### 6.9.4. Categorias Personalizadas

**Gerenciar categorias:**
- Adicionar nova categoria
- Editar existentes
- Excluir (se não tiver transações vinculadas)
- Reordenar

**Gerenciar subcategorias:**
- Mesmas opções acima

#### 6.9.5. Meios de Pagamento

- Adicionar meios personalizados
- Ativar/desativar

#### 6.9.6. Exportação de Dados

**Opções:**
- [ ] Exportar tudo (CSV)
- [ ] Exportar por período
- [ ] Exportar apenas transações
- [ ] Exportar apenas investimentos
- [ ] Exportar apenas cofrinhos

**Formato:** CSV (compatível com Excel, Google Sheets)

#### 6.9.7. Backup e Restauração

- [ ] Fazer backup completo (JSON)
- [ ] Restaurar backup
- [ ] Agendar backup automático (email)

### 6.10. Relatórios e Análises

**URL:** `/reports`

**Funcionalidades:**

#### 6.10.1. Relatório Mensal

**Seletor:** Mês/Ano

**Conteúdo:**
- Resumo do mês (receitas, despesas, saldo)
- Top 5 categorias em gastos
- Evolução do saldo (gráfico de linha)
- Comparativo com mês anterior (%)
- Taxa de poupança do mês

#### 6.10.2. Relatório Anual

**Seletor:** Ano

**Conteúdo:**
- Total anual por categoria (gráfico de barras)
- Mês com maior gasto
- Mês com maior poupança
- Evolução patrimonial do ano
- Projeção para o próximo ano

#### 6.10.3. Relatório por Categoria

**Filtros:**
- Categoria
- Período

**Conteúdo:**
- Total gasto na categoria
- Subcategorias mais utilizadas
- Evolução mensal da categoria
- Média mensal
- Maior e menor gasto

#### 6.10.4. Exportar Relatório

- PDF
- CSV
- Imagem (PNG)

---

## 7. ESTRUTURA DE PASTAS DO PROJETO

### 7.1. Estrutura Completa

```
finpocket/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json (PWA)
│
── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   └── illustrations/
│   │   └── styles/
│   │       ├── tailwind.css
│   │       └── global.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Modal.vue
│   │   │   ├── Input.vue
│   │   │   ├── Select.vue
│   │   │   ├── DatePicker.vue
│   │   │   ├── ProgressBar.vue
│   │   │   ├── Badge.vue
│   │   │   └── Icon.vue
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   ├── MobileNav.vue
│   │   │   └── Footer.vue
│   │   │
│   │   ├── dashboard/
│   │   │   ├── FinancialHealthCard.vue
│   │   │   ├── KPICard.vue
│   │   │   ├── ExpenseDistributionChart.vue
│   │   │   ├── BudgetProgressList.vue
│   │   │   ├── InvestmentSummaryCard.vue
│   │   │   ├── SavingsGoalsMiniCards.vue
│   │   │   └── AlertsPanel.vue
│   │   │
│   │   ├── transactions/
│   │   │   ├── TransactionForm.vue
│   │   │   ├── TransactionTable.vue
│   │   │   ├── TransactionFilters.vue
│   │   │   ├── QuickLaunchModal.vue
│   │   │   └── InstallmentCalculator.vue
│   │   │
│   │   ├── budget/
│   │   │   ├── BudgetConfigForm.vue
│   │   │   ├── Budget503020Cards.vue
│   │   │   ├── BudgetProgressTable.vue
│   │   │   └── CategoryBudgetSlider.vue
│   │   │
│   │   ├── savings/
│   │   │   ├── SavingsGoalCard.vue
│   │   │   ├── SavingsGoalForm.vue
│   │   │   ├── SavingsSummaryCards.vue
│   │   │   ├── GoalFilters.vue
│   │   │   └── ContributionModal.vue
│   │   │
│   │   ├── investments/
│   │   │   ├── InvestmentCard.vue
│   │   │   ├── InvestmentForm.vue
│   │   │   ├── PortfolioAllocation.vue
│   │   │   ├── AssetTable.vue
│   │   │   └── InvestmentSummary.vue
│   │   │
│   │   └── credit-card/
│   │       ├── CreditCardForm.vue
│   │       ├── CreditCardList.vue
│   │       └── InstallmentPreview.vue
│   │
│   ├── views/
│   │   ├── auth/
│   │   │   ├── Login.vue
│   │   │   ├── Register.vue
│   │   │   └── ForgotPassword.vue
│   │   │
│   │   ├── Dashboard.vue
│   │   ├── Transactions.vue
│   │   ├── Budget.vue
│   │   ├── SavingsGoals.vue
│   │   ├── Investments.vue
│   │   ├── CreditCards.vue
│   │   ├── Reports.vue
│   │   └── Settings.vue
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── stores/
│   │   ├── auth.js
│   │   ├── transactions.js
│   │   ├── categories.js
│   │   ├── budget.js
│   │   ├── savings.js
│   │   ├── investments.js
│   │   └── settings.js
│   │
│   ├── services/
│   │   ├── supabase.js
│   │   ├── auth.js
│   │   ├── transactions.js
│   │   ├── categories.js
│   │   ├── budget.js
│   │   ├── savings.js
│   │   ├── investments.js
│   │   └── reports.js
│   │
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── calculations.js
│   │   ├── validators.js
│   │   ├── dates.js
│   │   └── constants.js
│   │
│   ├── composables/
│   │   ├── useAuth.js
│   │   ├── useTransactions.js
│   │   ├── useBudget.js
│   │   ├── useSavings.js
│   │   └── useInvestments.js
│   │
│   ├── plugins/
│   │   ├── chartjs.js
│   │   └── masks.js
│   │
│   ├── App.vue
│   └── main.js
│
├── capacitor/
│   ├── android/
│   │   └── app/
│   └── ios/
│       └── App/
│
├── tests/
│   ├── unit/
│   └── e2e/
│
├── .env.example
── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── capacitor.config.json
└── README.md
```

### 7.2. Explicação da Estrutura

**`public/`**: Arquivos estáticos públicos

**`src/assets/`**: Imagens, fontes, estilos globais

**`src/components/`**: Componentes Vue reutilizáveis
- `common/`: Componentes genéricos (botões, inputs, modais)
- `layout/`: Estrutura da aplicação (header, sidebar)
- `dashboard/`: Componentes específicos do dashboard
- `transactions/`: Componentes de transações
- `budget/`: Componentes de orçamento
- `savings/`: Componentes de cofrinhos
- `investments/`: Componentes de investimentos

**`src/views/`**: Páginas completas (rotas)

**`src/router/`**: Configuração de rotas

**`src/stores/`**: Estado global (Pinia)

**`src/services/`**: Integração com Supabase (API)

**`src/utils/`**: Funções utilitárias

**`src/composables/`**: Funções reativas do Vue 3

**`src/plugins/`**: Plugins do Vue

**`capacitor/`**: Código nativo mobile (Android/iOS)

**`tests/`**: Testes automatizados

---

## 8. GIT FLOW E VERSIONAMENTO

### 8.1. Branches Principais

```
main (produção)
│
── staging (homologação/testes)
    │
    └── feature/* (desenvolvimento)
```

### 8.2. Fluxo de Trabalho

#### **Branch `main`**
- **O que tem:** Código em produção (app estável)
- **Quem mexe:** Apenas via merge da `staging`
- **Deploy:** Automático na Vercel (produção)
- **Regra:** Nunca fazer commit direto aqui

#### **Branch `staging`**
- **O que tem:** Código pronto para teste (pré-produção)
- **Quem mexe:** Merge das features após revisão
- **Deploy:** Automático na Vercel (URL de staging)
- **Regra:** Testar tudo aqui antes de ir para main

#### **Branches `feature/*`**
- **O que tem:** Funcionalidades em desenvolvimento
- **Quem mexe:** Desenvolvedor (você)
- **Origem:** Sempre criada a partir da `staging`
- **Destino:** Merge de volta para `staging`

### 8.3. Convenção de Nomes

**Features:**
```
feature/nome-da-funcionalidade

Exemplos:
feature/auth-login
feature/transactions-crud
feature/budget-module
feature/savings-goals
feature/investments-portfolio
```

**Hotfixes (correções urgentes):**
```
hotfix/descricao-curta

Exemplos:
hotfix/fix-login-error
hotfix/calculate-budget
```

### 8.4. Passo a Passo do Fluxo

#### **Iniciando uma nova funcionalidade:**

```bash
# 1. Garanta que está na branch staging atualizada
git checkout staging
git pull origin staging

# 2. Crie uma nova branch feature
git checkout -b feature/transactions-crud

# 3. Desenvolva a funcionalidade
# (faça commits conforme avança)
git add .
git commit -m "feat: create transaction form component"

git add .
git commit -m "feat: add transaction validation"

# 4. Envie para o GitHub
git push origin feature/transactions-crud

# 5. Crie um Pull Request (PR) no GitHub
#    - De: feature/transactions-crud
#    - Para: staging
#    - Adicione revisores (se tiver)
#    - Descreva o que foi feito

# 6. Após aprovação e merge no GitHub:
git checkout staging
git pull origin staging

# 7. Delete a branch feature (opcional)
git branch -d feature/transactions-crud
git push origin --delete feature/transactions-crud
```

#### **Preparando para produção:**

```bash
# 1. Teste tudo na branch staging
# (acesse https://seu-app-staging.vercel.app)

# 2. Se estiver tudo ok, crie PR para main
#    - De: staging
#    - Para: main

# 3. Após merge, o deploy automático acontece
# (acesse https://seu-app.vercel.app)

# 4. Crie uma tag de versão
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Versão 1.0.0 - Lançamento inicial"
git push origin v1.0.0
```

### 8.5. Convenção de Commits

Use o padrão **Conventional Commits**:

```
<tipo>(<escopo>): <descrição>

Exemplos:
feat(auth): add login with email and password
feat(transactions): create quick launch modal
fix(budget): correct 50/30/20 calculation
docs(readme): update installation instructions
style(button): update button colors
refactor(api): simplify supabase client
test(transactions): add unit tests for form
chore(deps): update vue to version 3.3.0
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação/estilo (não afeta código)
- `refactor`: Refatoração (sem mudar comportamento)
- `test`: Adição de testes
- `chore`: Configurações, dependências

### 8.6. .gitignore Recomendado

```gitignore
# Dependencies
node_modules/

# Build output
dist/

# Environment variables
.env
.env.local
.env.*.local

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Capacitor
capacitor/android/app/build/
capacitor/ios/App/build/

# Tests
coverage/

# Temporary files
tmp/
temp/
```

---

## 9. REQUISITOS FUNCIONAIS E NÃO-FUNCIONAIS

### 9.1. Requisitos Funcionais

#### **RF001 - Autenticação de Usuário**
- **Descrição:** Sistema deve permitir cadastro e login por email/senha ou Google
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Usuário pode se cadastrar com email e senha
  - [ ] Usuário pode se cadastrar com Google (one-click)
  - [ ] Usuário pode fazer login com email e senha
  - [ ] Usuário pode fazer login com Google (one-click)
  - [ ] Senha deve ter mínimo de 6 caracteres
  - [ ] Email deve ser único (independente do método)
  - [ ] Dados do Google (nome, email, foto) são capturados automaticamente
  - [ ] Usuário pode fazer logout
  - [ ] Sessão expira após 7 dias de inatividade
  - [ ] Usuário pode vincular método alternativo de autenticação

#### **RF002 - Lançamento Rápido**
- **Descrição:** Usuário deve poder adicionar transações rapidamente
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Modal acessível de qualquer página
  - [ ] Suporte a despesa, receita e aporte
  - [ ] Validação de campos obrigatórios
  - [ ] Suporte a parcelamento no cartão
  - [ ] Cálculo automático de parcelas

#### **RF003 - Gestão de Categorias**
- **Descrição:** Sistema deve permitir categorias pré-definidas e personalizadas
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] 10 categorias de despesa pré-definidas
  - [ ] 4 categorias de receita pré-definidas
  - [ ] Subcategorias para cada categoria
  - [ ] Usuário pode adicionar categorias personalizadas
  - [ ] Usuário pode editar/excluir categorias próprias

#### **RF004 - Cartões de Crédito**
- **Descrição:** Gestão de cartões e parcelamentos
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Cadastro de múltiplos cartões
  - [ ] Configuração de dia de fechamento e vencimento
  - [ ] Parcelamento automático de compras
  - [ ] Detecção de compras próximas ao fechamento
  - [ ] Ajuste manual do mês de início

#### **RF005 - Dashboard Interativo**
- **Descrição:** Visão geral da saúde financeira
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Score de saúde financeira (0-100)
  - [ ] Cards KPI (receitas, despesas, saldo, poupança)
  - [ ] Gráfico de distribuição de despesas
  - [ ] Alertas de orçamento
  - [ ] Visualização 50/30/20
  - [ ] Seletor de mês/ano

#### **RF006 - Planejamento Orçamentário**
- **Descrição:** Definição de tetos por categoria
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Configuração de teto por categoria
  - [ ] Cálculo automático do teto total
  - [ ] Visualização de consumo vs. orçado
  - [ ] Alertas visuais (verde/laranja/vermelho)
  - [ ] Metodologia 50/30/20 implementada

#### **RF007 - Metas de Poupança (Cofrinhos)**
- **Descrição:** Criação e acompanhamento de metas
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Criar múltiplos cofrinhos
  - [ ] Definir nome, valor alvo, prazo
  - [ ] Categorias (curto/médio/longo prazo, sonhos)
  - [ ] Cor personalizável
  - [ ] Barra de progresso
  - [ ] Cálculo de tempo estimado
  - [ ] Aporte direto no cofrinho

#### **RF008 - Gestão de Investimentos**
- **Descrição:** Acompanhamento de aportes em investimentos
- **Prioridade:** Média
- **Critérios de Aceite:**
  - [ ] Cadastro de ativos (RF, Ações, FIIs)
  - [ ] Registro de quantidade e valor
  - [ ] Distribuição por classe de ativo
  - [ ] Aviso sobre valor de mercado
  - [ ] Histórico de aportes

#### **RF009 - Banco de Dados de Lançamentos**
- **Descrição:** Visualização e gestão de todas as transações
- **Prioridade:** Alta
- **Critérios de Aceite:**
  - [ ] Tabela com todos os lançamentos
  - [ ] Filtros avançados (data, categoria, tipo, etc.)
  - [ ] Busca textual
  - [ ] Paginação
  - [ ] Edição inline
  - [ ] Exclusão em massa

#### **RF010 - Exportação de Dados**
- **Descrição:** Usuário pode baixar seus dados
- **Prioridade:** Média
- **Critérios de Aceite:**
  - [ ] Exportar para CSV
  - [ ] Copiar para Google Sheets
  - [ ] Exportar por período
  - [ ] Exportar tudo

#### **RF011 - Relatórios**
- **Descrição:** Geração de relatórios financeiros
- **Prioridade:** Média
- **Critérios de Aceite:**
  - [ ] Relatório mensal
  - [ ] Relatório anual
  - [ ] Relatório por categoria
  - [ ] Exportar em PDF

#### **RF012 - Configurações**
- **Descrição:** Personalização do sistema
- **Prioridade:** Baixa
- **Critérios de Aceite:**
  - [ ] Alterar perfil
  - [ ] Mudar senha
  - [ ] Configurar tema (claro/escuro)
  - [ ] Personalizar categorias
  - [ ] Configurar método de orçamento

### 9.2. Requisitos Não-Funcionais

#### **RNF001 - Performance**
- **Tempo de carregamento:** < 3 segundos
- **Tempo de resposta da API:** < 500ms
- **Lazy loading:** Implementar em listas longas

#### **RNF002 - Usabilidade**
- **Interface intuitiva:** Máximo 3 cliques para ações comuns
- **Responsivo:** Funcionar em mobile (320px+) e desktop
- **Acessibilidade:** WCAG 2.1 nível AA

#### **RNF003 - Segurança**
- **Autenticação:** JWT com refresh token
- **OAuth:** Google OAuth 2.0 para login social
- **Criptografia:** HTTPS obrigatório
- **Dados sensíveis:** Senhas hash (bcrypt)
- **RLS:** Row Level Security no banco de dados

#### **RNF004 - Disponibilidade**
- **Uptime:** 99% (SLA)
- **Backup:** Automático diário
- **Recuperação:** RTO < 4 horas

#### **RNF005 - Escalabilidade**
- **Arquitetura:** Preparada para crescimento
- **Banco de dados:** Índices otimizados
- **Cache:** Implementar onde aplicável

#### **RNF006 - Compatibilidade**
- **Navegadores:** Chrome, Firefox, Safari, Edge (últimas 2 versões)
- **Mobile:** Android 8.0+, iOS 12+
- **Telas:** 320px a 1920px+

#### **RNF007 - Custo**
- **Infraestrutura:** 100% gratuita (free tier)
- **Limites:** Respeitar limites do Supabase free (500MB, 2GB banda)

#### **RNF008 - Manutenibilidade**
- **Código:** Documentado e comentado
- **Padrões:** ESLint + Prettier
- **Testes:** Cobertura mínima de 70%

---

## 10. FLUXOS DE USUÁRIO

### 10.1. Fluxo de Onboarding (Primeiro Acesso)

```
[1. Tela de Boas-vindas]
        ↓
[2. Cadastro/Login]
        ↓
[3. Configuração Inicial]
   ├─ Definir renda mensal
   ├─ Configurar tetos iniciais (50/30/20)
   ├─ Cadastrar reserva de emergência (opcional)
   └─ Definir meta de poupança
        ↓
[4. Dashboard Principal]
        ↓
[5. Tour Guiado (opcional)]
   ├─ Explicar cards KPI
   ├─ Mostrar botão de lançamento rápido
   ├─ Explicar 50/30/20
   └─ Como criar cofrinhos
        ↓
[6. App Pronto para Uso]
```

### 10.2. Fluxo de Lançamento de Despesa

```
[Usuário clica em "Lançamento Rápido"]
        ↓
[Modal abre na aba "Despesa"]
        ↓
[Preenche formulário:]
  - Data: [05/09/2026]
  - Valor: [R$ 2.450,00]
  - Categoria: [Moradia]
  - Subcategoria: [Aluguel/Condomínio]
  - Descrição: [Aluguel setembro]
  - Meio de Pagamento: [Boleto]
  - Status: [Pago]
  - Classificação: [Essencial]
        ↓
[Clica em "Salvar"]
        ↓
[Validação de dados]
        ↓
[Salva no banco de dados]
        ↓
[Atualiza dashboard em tempo real]
        ↓
[Toast: "Despesa lançada com sucesso!"]
        ↓
[Modal fecha]
```

### 10.3. Fluxo de Compra no Cartão Parcelada

```
[Usuário clica em "Lançamento Rápido"]
        ↓
[Seleciona "Despesa"]
        ↓
[Meio de Pagamento: Cartão de Crédito]
        ↓
[Campos adicionais aparecem:]
  - Cartão: [Nubank]
  - Parcelas: [12x]
        ↓
[Preenche:]
  - Data: [18/09/2026]
  - Valor total: [R$ 12.000,00]
  - Categoria: [Compras]
  - Subcategoria: [Eletrônicos]
  - Descrição: [Notebook novo]
        ↓
[Sistema calcula automaticamente:]
  - Valor da parcela: R$ 1.000,00
  - Fechamento do cartão: Dia 20
        ↓
[Alerta: "Compra próxima ao fechamento"]
  "Em qual mês deseja iniciar?"
  ○ Setembro/2026
  ● Outubro/2026
        ↓
[Usuário seleciona: Outubro/2026]
        ↓
[Preview das parcelas:]
  1ª: Out/2026 - R$ 1.000,00
  2ª: Nov/2026 - R$ 1.000,00
  ...
  12ª: Set/2027 - R$ 1.000,00
        ↓
[Confirma]
        ↓
[Sistema cria 12 transações automaticamente]
        ↓
[Sucesso!]
```

### 10.4. Fluxo de Criação de Cofrinho

```
[Usuário vai em "Metas de Poupança"]
        ↓
[Clica em "+ Novo Cofrinho"]
        ↓
[Modal de criação abre]
        ↓
[Preenche:]
  - Nome: [Viagem Europa 2027]
  - Valor total: [R$ 18.000,00]
  - Valor inicial: [R$ 2.000,00]
  - Prazo: [Julho/2027]
  - Categoria: [Sonho]
  - Cor: [Roxo]
  - Descrição: [Lua de mel]
  - Prioridade: [Média]
        ↓
[Sistema calcula:]
  - Faltante: R$ 16.000,00
  - Meses restantes: ~10 meses
  - Aporte mensal sugerido: R$ 1.600,00
        ↓
[Salva]
        ↓
[Card do cofrinho aparece na lista]
        ↓
[Barra de progresso: 11.1% (2.000/18.000)]
```

### 10.5. Fluxo de Aporte em Investimentos

```
[Usuário vai em "Investimentos"]
        ↓
[Clica em "Registrar Novo Aporte"]
        ↓
[Modal abre]
        ↓
[Preenche:]
  - Data: [10/09/2026]
  - Valor: [R$ 3.150,00]
  - Tipo: [FIIs]
  - Nome: [CSHG Logística]
  - Ticker: [HGLG11]
  - Quantidade: [100 cotas]
  - Valor unitário: [R$ 31,50]
  - Corretora: [BTG Pactual]
        ↓
[Validação]
        ↓
[Salva no banco]
        ↓
[Atualiza:]
  - Patrimônio total
  - Distribuição da carteira
  - Tabela de ativos
        ↓
[Toast: "Aporte registrado!"]
```

### 10.6. Fluxo de Configuração de Orçamento

```
[Usuário vai em "Planejamento e Orçamento"]
        ↓
[Seleciona mês: Setembro/2026]
        ↓
[Clica em "Configurar Orçamento"]
        ↓
[Formulário aparece com categorias]
        ↓
[Define tetos:]
  Moradia: R$ 3.200,00
  Alimentação: R$ 1.800,00
  Transporte: R$ 900,00
  Saúde: R$ 850,00
  Educação: R$ 450,00
  Lazer: R$ 950,00
  ...
        ↓
[Sistema calcula automaticamente:]
  - Teto total: R$ 10.130,00
  - Essenciais (50%): R$ 5.065,00
  - Importantes (30%): R$ 3.039,00
  - Luxo (20%): R$ 2.026,00
        ↓
[Salva]
        ↓
[Dashboard atualiza com novos limites]
        ↓
[Barras de progresso mostram consumo]
```

---

## 11. PLANO DE IMPLEMENTAÇÃO

### Fase 1: Fundação (Semanas 1-2)

**Objetivo:** Configurar ambiente e estrutura básica

**Semana 1:**
- [ ] Configurar Node.js e ferramentas
- [ ] Criar projeto Vue.js com Vite
- [ ] Configurar Tailwind CSS
- [ ] Configurar ESLint + Prettier
- [ ] Criar repositório GitHub
- [ ] Configurar branches (main, staging)
- [ ] Criar conta no Supabase
- [ ] Configurar projeto Supabase
- [ ] Criar tabelas do banco de dados
- [ ] Implementar autenticação (email/senha + Google)
- [ ] Configurar OAuth Google no Supabase
- [ ] Configurar deploy na Vercel (staging)

**Semana 2:**
- [ ] Criar layout base (Header, Sidebar)
- [ ] Implementar roteamento (Vue Router)
- [ ] Configurar Pinia (estado global)
- [ ] Criar componentes básicos (Button, Card, Input)
- [ ] Implementar sistema de temas (claro/escuro)
- [ ] Criar página de Dashboard (vazia)
- [ ] Testar fluxo completo de autenticação

**Entregáveis:**
- ✅ App Vue.js configurado
- ✅ Banco de dados no Supabase
- ✅ Autenticação funcionando (email/senha + Google)
- ✅ Deploy automático configurado

---

### Fase 2: Transações e Categorias (Semanas 3-5)

**Objetivo:** CRUD completo de transações

**Semana 3:**
- [ ] Criar tabelas: categories, subcategories
- [ ] Popular categorias padrão (seed)
- [ ] Criar serviço de categorias (API)
- [ ] Criar store Pinia para categorias
- [ ] Implementar tabela de transações
- [ ] Criar componentes de lista/tabela

**Semana 4:**
- [ ] Criar formulário de transação (Despesa)
- [ ] Implementar validações
- [ ] Criar serviço de transações (API)
- [ ] Implementar CRUD completo
- [ ] Adicionar filtros na tabela
- [ ] Implementar busca textual

**Semana 5:**
- [ ] Adicionar Receita e Aporte no formulário
- [ ] Implementar sistema de parcelas
- [ ] Criar lógica de cartões de crédito
- [ ] Implementar cálculo automático de parcelas
- [ ] Adicionar meio de pagamento
- [ ] Criar sistema de status (Pago/Pendente)

**Entregáveis:**
- ✅ CRUD de transações completo
- ✅ Categorias e subcategorias funcionais
- ✅ Parcelamento no cartão implementado
- ✅ Filtros e busca operantes

---

### Fase 3: Dashboard e Visualizações (Semanas 6-8)

**Objetivo:** Dashboard interativo e gráficos

**Semana 6:**
- [ ] Criar componentes de cards KPI
- [ ] Implementar cálculos de receitas/despesas
- [ ] Criar card de Saúde Financeira
- [ ] Implementar algoritmo de score
- [ ] Adicionar seletor de mês/ano

**Semana 7:**
- [ ] Integrar Chart.js
- [ ] Criar gráfico de pizza (distribuição)
- [ ] Implementar interatividade (clique filtra)
- [ ] Criar gráfico de barras (categorias)
- [ ] Adicionar legenda e tooltips

**Semana 8:**
- [ ] Criar card de alertas
- [ ] Implementar lógica 50/30/20
- [ ] Criar barras de progresso
- [ ] Implementar sistema de status (cores)
- [ ] Adicionar animações e transições
- [ ] Otimizar performance

**Entregáveis:**
- ✅ Dashboard completo e interativo
- ✅ Gráficos funcionais
- ✅ Cálculos automáticos
- ✅ Alertas e indicadores visuais

---

### Fase 4: Orçamento e Planejamento (Semanas 9-10)

**Objetivo:** Sistema de orçamento por categoria

**Semana 9:**
- [ ] Criar tabela budgets no banco
- [ ] Implementar CRUD de orçamentos
- [ ] Criar formulário de configuração
- [ ] Implementar sliders/inputs de teto
- [ ] Calcular totais automaticamente

**Semana 10:**
- [ ] Criar visualização 50/30/20
- [ ] Implementar comparação Orçado vs. Realizado
- [ ] Criar sistema de alertas (semáforo)
- [ ] Adicionar barra de progresso por categoria
- [ ] Implementar edição rápida de tetos

**Entregáveis:**
- ✅ Configuração de orçamentos
- ✅ Visualização 50/30/20
- ✅ Alertas de estouro de orçamento
- ✅ Comparativo visual

---

### Fase 5: Metas de Poupança (Semanas 11-13)

**Objetivo:** Sistema de cofrinhos completo

**Semana 11:**
- [ ] Criar tabela savings_goals
- [ ] Implementar CRUD de metas
- [ ] Criar card de cofrinho
- [ ] Implementar barra de progresso
- [ ] Adicionar sistema de cores

**Semana 12:**
- [ ] Criar cards de resumo (total, progresso, ritmo)
- [ ] Implementar cálculo de tempo estimado
- [ ] Adicionar filtros por categoria
- [ ] Criar modal de aporte
- [ ] Implementar aporte direto

**Semana 13:**
- [ ] Criar sistema de prioridade
- [ ] Implementar metas completas (concluídas)
- [ ] Adicionar descrição/motivação
- [ ] Criar projeção temporal
- [ ] Otimizar UI/UX

**Entregáveis:**
- ✅ Cofrinhos funcionais
- ✅ Cálculos de projeção
- ✅ Aportes diretos
- ✅ Visualização atrativa

---

### Fase 6: Investimentos (Semanas 14-16)

**Objetivo:** Gestão de carteira de investimentos

**Semana 14:**
- [ ] Criar tabela investments
- [ ] Implementar CRUD de ativos
- [ ] Criar formulário de aporte
- [ ] Implementar classes de ativo
- [ ] Adicionar ticker/código

**Semana 15:**
- [ ] Criar cards de resumo (patrimônio, lucro)
- [ ] Implementar distribuição da carteira
- [ ] Criar tabela de ativos
- [ ] Calcular pesos percentuais
- [ ] Adicionar aviso sobre valor de mercado

**Semana 16:**
- [ ] Implementar reserva de emergência (cálculo em meses)
- [ ] Criar visualização por classe
- [ ] Adicionar botões de aporte rápido
- [ ] Implementar histórico de aportes
- [ ] Refinar UI

**Entregáveis:**
- ✅ Carteira de investimentos
- ✅ Distribuição visual
- ✅ Cálculos de patrimônio
- ✅ Reserva em meses

---

### Fase 7: Mobile e Polimento (Semanas 17-19)

**Objetivo:** App mobile e melhorias finais

**Semana 17:**
- [ ] Instalar Capacitor
- [ ] Configurar Android
- [ ] Configurar iOS
- [ ] Adaptar layout para mobile
- [ ] Testar em dispositivos reais

**Semana 18:**
- [ ] Implementar PWA (manifest, service worker)
- [ ] Adicionar ícones e splash screens
- [ ] Configurar permissões (se necessário)
- [ ] Gerar APK de teste
- [ ] Testar funcionalidades offline

**Semana 19:**
- [ ] Corrigir bugs identificados
- [ ] Otimizar performance
- [ ] Melhorar acessibilidade
- [ ] Adicionar animações
- [ ] Refinar responsividade
- [ ] Testes finais

**Entregáveis:**
- ✅ App Android funcionando
- ✅ PWA instalável
- ✅ Layout responsivo
- ✅ Performance otimizada

---

### Fase 8: Relatórios e Exportação (Semanas 20-21)

**Objetivo:** Relatórios e download de dados

**Semana 20:**
- [ ] Criar página de relatórios
- [ ] Implementar relatório mensal
- [ ] Criar relatório anual
- [ ] Implementar relatório por categoria
- [ ] Adicionar gráficos nos relatórios

**Semana 21:**
- [ ] Implementar exportação CSV
- [ ] Criar função de copiar para Sheets
- [ ] Adicionar exportação PDF
- [ ] Implementar backup/restauração
- [ ] Testar exportações

**Entregáveis:**
- ✅ Relatórios completos
- ✅ Exportação de dados
- ✅ Backup funcional

---

### Fase 9: Configurações e Personalização (Semana 22)

**Objetivo:** Tela de configurações

**Semana 22:**
- [ ] Criar página de configurações
- [ ] Implementar edição de perfil
- [ ] Adicionar mudança de senha
- [ ] Criar gestão de categorias personalizadas
- [ ] Implementar preferências (tema, moeda)
- [ ] Adicionar gestão de meios de pagamento

**Entregáveis:**
- ✅ Configurações completas
- ✅ Personalização total

---

### Fase 10: Testes e Lançamento (Semanas 23-24)

**Objetivo:** Testes finais e lançamento

**Semana 23:**
- [ ] Testes manuais completos
- [ ] Correção de bugs críticos
- [ ] Testes de usabilidade
- [ ] Otimização de performance
- [ ] Documentação do código
- [ ] Preparar README

**Semana 24:**
- [ ] Merge staging → main
- [ ] Deploy em produção
- [ ] Testes em produção
- [ ] Monitoramento (logs, erros)
- [ ] Coletar feedback
- [ ] Planejar próximas features

**Entregáveis:**
- ✅ App em produção
- ✅ Documentação
- ✅ Monitoramento ativo

---

### Roadmap Visual

```
Mês 1: [████████░░░░░░░░░░░░] Fundação + Transações
Mês 2: [████████████████░░░░] Dashboard + Orçamento
Mês 3: [████████████████████] Cofrinhos + Investimentos
Mês 4: [████████████████░░░░] Mobile + Relatórios
Mês 5: [████████████████████] Polimento + Lançamento
```

---

## 12. CONSIDERAÇÕES FINAIS

### 12.1. Dicas para Iniciantes

**1. Comece pequeno:**
- Não tente fazer tudo de uma vez
- Uma funcionalidade por vez
- Teste cada parte antes de avançar

**2. Não tenha medo de errar:**
- Bugs fazem parte do aprendizado
- Google é seu melhor amigo
- Stack Overflow tem a maioria das respostas

**3. Versionamento é crucial:**
- Faça commits frequentes
- Mensagens claras e descritivas
- Use branches para features

**4. Documente seu código:**
- Comentários explicativos
- README atualizado
- Anote o que aprendeu

**5. Peça ajuda:**
- Comunidades Vue.js (Discord, Reddit)
- Fóruns (Stack Overflow)
- Grupos de estudo

### 12.2. Próximos Passos Após o MVP

**Fase 2 (Features Avançadas):**
- [ ] Reconhecimento facial/digital (mobile)
- [ ] Notificações push (lembretes de contas)
- [ ] Integração com Open Banking (APIs bancárias)
- [ ] Cotação automática de investimentos
- [ ] Relatórios por email
- [ ] Multi-usuário (família/casal)
- [ ] Modo offline completo
- [ ] Sync em tempo real entre dispositivos

**Fase 3 (Monetização - opcional):**
- [ ] Versão Premium (features extras)
- [ ] Remover anúncios (se tiver)
- [ ] Relatórios avançados
- [ ] Consultoria financeira integrada

### 12.3. Recursos de Aprendizado

**Vue.js:**
- Documentação oficial: https://vuejs.org
- Vue Mastery (cursos gratuitos)
- Vue School

**Supabase:**
- Documentação: https://supabase.com/docs
- YouTube: Supabase channel

**Capacitor:**
- Documentação: https://capacitorjs.com/docs

**Git:**
- Git Immersion (tutorial interativo)
- Pro Git (livro gratuito)

### 12.4. Checklist de Lançamento

**Antes de publicar:**
- [ ] Testar em diferentes navegadores
- [ ] Testar em diferentes dispositivos mobile
- [ ] Verificar performance (Lighthouse)
- [ ] Testar fluxo completo de autenticação (email/senha)
- [ ] Testar fluxo completo de autenticação (Google)
- [ ] Testar todas as funcionalidades principais
- [ ] Verificar responsividade
- [ ] Testar offline (PWA)
- [ ] Configurar analytics (opcional)
- [ ] Configurar Sentry (monitoramento de erros)
- [ ] Criar termos de uso e política de privacidade
- [ ] Preparar screenshots para loja de apps
- [ ] Escrever descrição do app

### 12.5. Contato e Suporte

**Dúvidas durante o desenvolvimento:**
- GitHub Issues (para bugs e features)
- Discord Vue.js Brasil
- Stack Overflow (tag: vue.js)

---

## 📝 GLOSSÁRIO

**API:** Interface de Programação de Aplicações (Application Programming Interface)

**CRUD:** Create, Read, Update, Delete (operações básicas de banco de dados)

**JWT:** JSON Web Token (padrão de autenticação)

**PWA:** Progressive Web App (aplicativo web progressivo)

**RLS:** Row Level Security (segurança em nível de linha)

**KPI:** Key Performance Indicator (Indicador-chave de Performance)

**UI/UX:** User Interface / User Experience

**SLA:** Service Level Agreement (Acordo de Nível de Serviço)

**RTO:** Recovery Time Objective (Objetivo de Tempo de Recuperação)

---

## 📚 REFERÊNCIAS

1. Vue.js Documentation - https://vuejs.org
2. Supabase Documentation - https://supabase.com/docs
3. Tailwind CSS - https://tailwindcss.com
4. Capacitor Documentation - https://capacitorjs.com
5. Conventional Commits - https://www.conventionalcommits.org
6. Git Flow - https://nvie.com/posts/a-successful-git-branching-model

---

**Documento criado em:** Setembro/2026  
**Versão:** 1.0  
**Status:** Aprovado para desenvolvimento

---

## ✅ PRÓXIMOS PASSOS

1. **Revisar este SPEC** e fazer ajustes se necessário
2. **Escolher nome definitivo** do projeto
3. **Configurar ambiente de desenvolvimento**
4. **Criar repositório GitHub**
5. **Iniciar Fase 1 (Fundação)**

**Vamos começar? 🚀**
