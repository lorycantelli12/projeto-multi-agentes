# Task: Atualizar Status

```yaml
task:
  name: atualizar-status
  agent: status-tracker
  description: Atualiza o status de um time ou entrega no lançamento
  elicit: false
```

---

## Objetivo

Atualizar o arquivo `LAUNCH-STATUS.md` com o progresso atual.

## Uso

```
*atualizar-status [time] [status]
```

### Times disponíveis
- `lideranca`
- `metodologia`
- `social` (redes sociais)
- `criativo`
- `copy`
- `trafego`
- `email`
- `tech` (lp-tech)
- `guardioes`

### Status disponíveis
- `waiting` → ⏳ Aguardando
- `progress` → 🔄 Em andamento
- `review` → 👀 Em revisão
- `blocked` → 🚫 Bloqueado
- `done` → ✅ Concluído

## Exemplos

```bash
# Marcar copy como concluído
*atualizar-status copy done

# Marcar tráfego como em andamento
*atualizar-status trafego progress

# Marcar tech como bloqueado
*atualizar-status tech blocked
```

## Passos

### 1. Ler arquivo atual
Ler `LAUNCH-STATUS.md`

### 2. Atualizar tabela de status
Encontrar a linha do time e atualizar o status

### 3. Adicionar ao histórico
Adicionar entrada no histórico:
```
| [DATA] | [Time] atualizado para [Status] | @status-tracker |
```

### 4. Atualizar data
Atualizar campo "Última atualização" no topo

### 5. Salvar arquivo
Salvar alterações

### 6. Confirmar

```
✅ Status atualizado!

📊 [Time]: [Status Anterior] → [Novo Status]

Commit suas alterações para a equipe ver:
git add LAUNCH-STATUS.md && git commit -m "status: [time] [status]"
```

## Atualização em Lote

Para atualizar múltiplos times:

```
*atualizar-status copy done, criativo done, trafego progress
```

## Output

- LAUNCH-STATUS.md atualizado
- Histórico registrado
