# Task: Criar Novo Lançamento

```yaml
task:
  name: criar-lancamento
  agent: status-tracker
  description: Cria novo arquivo de status para acompanhar um lançamento
  elicit: true
```

---

## Objetivo

Criar um novo arquivo `LAUNCH-STATUS.md` para acompanhar o progresso de um lançamento específico.

## Passos

### 1. Coletar Informações

Pergunte ao usuário:

```
📋 Vamos criar o tracking do seu lançamento!

1. **Nome do lançamento:** (ex: "Lançamento Curso XYZ - Fev 2024")
2. **Nome do produto:** (ex: "Curso XYZ")
3. **Metodologia:** (PLF, Meteórico, Semente, Perpétuo, High Ticket)
4. **Data de abertura do carrinho:** (ex: 15/03/2024)
5. **Data de fechamento:** (ex: 22/03/2024)
6. **Meta de leads:** (ex: 5000)
7. **Meta de vendas:** (ex: 100)
```

### 2. Criar Arquivo

1. Copiar template de `templates/LAUNCH-STATUS-TEMPLATE.md`
2. Substituir variáveis pelas respostas
3. Salvar como `LAUNCH-STATUS.md` na raiz do squad

### 3. Definir Expert

Baseado na metodologia escolhida:

| Metodologia | Expert |
|-------------|--------|
| PLF (Interno/Externo) | @erico-rocha |
| Meteórico | @tales-perini |
| Semente | @micha-menezes |
| Perpétuo | @priscila-zillo |
| High Ticket | @wendell-carvalho |
| Corredor Polonês | @leandro-ferrari |

### 4. Confirmar Criação

```
✅ Lançamento criado com sucesso!

📁 Arquivo: squads/lancamentos-squad/LAUNCH-STATUS.md

Para compartilhar com a equipe:
1. Commit no GitHub
2. Compartilhe o link do arquivo

Próximos passos:
1. @cmo deve criar o plano de lançamento
2. @[expert] deve estruturar a metodologia
3. Use *atualizar-status para manter atualizado
```

## Output

- Arquivo `LAUNCH-STATUS.md` criado
- Lançamento pronto para acompanhamento
