window.__ModuleLoader__.load({
  id: 'dsh-approval-zh',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const NS = 'approvalZh'

    /** ---------------------------------------------------------------- copy */
    const zh = {
      'strip.auto': '自动审查未放行 · 等你确认',
      'strip.escalate': '需要临时提升权限 · 等你确认',
      'strip.generic': '需要你确认后才会执行',

      'title.auto': '自动审查没有放行这次操作',
      'title.escalate': '这次操作需要更高的权限',
      'title.generic': '有一个操作需要你确认',
      'title.genericTool': '工具「{tool}」请求你授权',

      'explain.auto': 'DSH 按「自动审查」模式，在执行前让模型检查了这次操作。审查认为风险偏高，没有自动放行，所以停下来让你亲自决定。',
      'explain.escalate': '这次操作超出了当前会话的权限范围，DSH 需要临时提升权限才能继续。',
      'explain.generic': '这次操作需要你明确同意后才能继续。',

      'mode.heading': '权限变化',
      'mode.escalateTo': '需要提升到「{mode}」权限',
      'mode.full.name': '完全访问',
      'mode.full.desc': '可以读写工作区之外的任何文件，也能运行任意命令；风险最高，只在你完全信任这次操作时允许。',
      'mode.workspace.name': '工作区读写',
      'mode.workspace.desc': '可以修改当前工作区内的文件，但不能访问工作区之外。',
      'mode.readonly.name': '只读',
      'mode.readonly.desc': '不能修改任何文件。',
      'mode.other.desc': '比当前权限更高的访问范围。',

      'label.tool': '操作',
      'label.why': '为什么需要你确认',
      'label.risk': '自动审查关注的点',
      'label.reasonAuto': '自动审查理由（英文原文，点击展开）',
      'label.reasonOriginal': '原始说明（英文原文，点击展开）',
      'label.reason': '操作理由',
      'label.command': '即将执行的命令',
      'label.description': '命令说明',
      'label.allowEffect': '允许后会发生什么',
      'label.ask': '这次操作会做什么',

      'allow.auto': '这次操作会立即执行，不再经过自动审查。',
      'allow.escalate': '仅这一次会以「{mode}」权限执行，之后恢复当前权限。',
      'allow.generic': '这次操作会立即执行。',
      'reject.effect': '拒绝后：这次操作不会执行，DSH 会把拒绝结果告诉模型。',
      'scope.note': '这个选择只对当前这一次操作有效，不会改变任何默认权限。',

      'btn.reject': '拒绝，不执行（Esc）',
      'btn.allow': '允许这一次（Enter）',
      'hint.keys': '回车 = 允许一次 · Esc = 拒绝',
      'answered': '已提交，正在处理…',
      'aria.card': '操作授权确认，需要你选择允许或拒绝',
      'aria.detail': '审批详情',

      'risk.install': '安装或修改插件',
      'risk.config': '修改 DSH 配置',
      'risk.profileWide': '影响整个 DSH',
      'risk.network': '涉及网络或远程传输',
      'risk.delete': '删除或覆盖内容',
      'risk.outside': '超出当前权限范围',
      'risk.secret': '可能涉及敏感信息',
      'risk.prod': '生产环境操作',
      'risk.irreversible': '可能不可恢复',
      'risk.unauthorized': '超出你明确授权的范围',
      'risk.modify': '修改文件或系统状态',
      'risk.reviewerDowngrade': '审查模型判定风险偏高',

      'tool.ops_bash': '运行命令',
      'tool.bash': '运行命令',
      'tool.ops_pwsh': '运行 PowerShell 命令',
      'tool.pwsh': '运行 PowerShell 命令',
      'tool.write': '写入文件',
      'tool.edit': '修改文件',
      'tool.read': '读取文件',
      'tool.ops_read_files': '读取文件',
      'tool.glob': '查找文件',
      'tool.grep': '搜索文件内容',
      'tool.subagent': '启动子代理',
      'tool.spawn_teammate': '启动队友代理',
      'tool.workflow': '运行工作流',
      'tool.web_fetch': '访问网页',
      'tool.web_search': '联网搜索',
      'tool.skill': '加载技能',
      'tool.present': '展示交付物',
      'tool.install_bundle': '安装插件',
      'tool.plugin_manager': '管理插件',
      'tool.schedule_create': '创建定时任务',

      'sync.strip': '需要你确认 · 会话同步',
      'sync.title.push': '把这台机器的会话改动推送到同步远端？',
      'sync.title.pull': '把远端的会话改动拉取到本机镜像？',
      'sync.explain.push': '推送会把本机会话文件提交并上传到配置的同步远端。它不会强制覆盖远端：如果推送被拒绝，会先拉取合并再重试一次。',
      'sync.explain.pull': '拉取会把远端的会话改动下载到本机同步镜像，采用保留双方的合并方式，不会静默覆盖本地内容。',
      'sync.note': '确认后才会执行；点取消不会上传或下载任何内容。',
      'sync.btn.cancel': '取消，什么都不做（Esc）',
      'sync.btn.push': '确认推送（Enter）',
      'sync.btn.pull': '确认拉取（Enter）',
      'sync.hint': '回车 = 确认 · Esc = 取消',
      'sync.submitted': '已提交，正在同步…',
      'sync.error': '提交失败，请重试或刷新页面后再试。',
      'sync.original': '英文原文（点击展开）',
      'sync.tool.push': '会话同步推送',
      'sync.tool.pull': '会话同步拉取',
    }

    const en = {
      'strip.auto': 'Auto review blocked this call · waiting for you',
      'strip.escalate': 'Needs elevated permission · waiting for you',
      'strip.generic': 'Needs your approval to run',

      'title.auto': 'Auto review did not clear this operation',
      'title.escalate': 'This operation needs a higher permission level',
      'title.generic': 'An operation needs your approval',
      'title.genericTool': 'Tool "{tool}" requests your approval',

      'explain.auto': 'Auto review ran the current model over this operation before execution. It judged the risk too high to clear automatically, so it stopped and handed the decision to you.',
      'explain.escalate': 'This operation exceeds the current session permission, so DSH needs a temporary elevation to continue.',
      'explain.generic': 'This operation needs your explicit consent before it can continue.',

      'mode.heading': 'Permission change',
      'mode.escalateTo': 'Needs the "{mode}" permission',
      'mode.full.name': 'Full access',
      'mode.full.desc': 'Can read and write any file outside the workspace and run any command. Highest risk; allow only when you fully trust this operation.',
      'mode.workspace.name': 'Workspace write',
      'mode.workspace.desc': 'Can modify files inside the current workspace, but not outside it.',
      'mode.readonly.name': 'Read only',
      'mode.readonly.desc': 'Cannot modify any file.',
      'mode.other.desc': 'A wider access level than the current permission.',

      'label.tool': 'Operation',
      'label.why': 'Why you are asked',
      'label.risk': 'What auto review flagged',
      'label.reasonAuto': 'Auto review reason (English original; click to expand)',
      'label.reasonOriginal': 'Original reason (English; click to expand)',
      'label.reason': 'Reason',
      'label.command': 'Command about to run',
      'label.description': 'Command description',
      'label.allowEffect': 'What happens if you allow',
      'label.ask': 'What this operation does',

      'allow.auto': 'The operation runs immediately without another auto review.',
      'allow.escalate': 'Only this operation runs with "{mode}" permission; the current permission returns afterwards.',
      'allow.generic': 'The operation runs immediately.',
      'reject.effect': 'If you reject: the operation does not run, and DSH reports the rejection to the model.',
      'scope.note': 'This choice applies to this one operation only and does not change any default permission.',

      'btn.reject': 'Reject, do not run (Esc)',
      'btn.allow': 'Allow this once (Enter)',
      'hint.keys': 'Enter = allow once · Esc = reject',
      'answered': 'Submitted, processing…',
      'aria.card': 'Operation approval: choose allow or reject',
      'aria.detail': 'Approval details',

      'risk.install': 'Installs or changes a plugin',
      'risk.config': 'Changes DSH configuration',
      'risk.profileWide': 'Affects the whole DSH profile',
      'risk.network': 'Involves network or remote transfer',
      'risk.delete': 'Deletes or overwrites content',
      'risk.outside': 'Exceeds the current permission scope',
      'risk.secret': 'May involve sensitive data',
      'risk.prod': 'Production operation',
      'risk.irreversible': 'May be irreversible',
      'risk.unauthorized': 'Beyond what you explicitly authorized',
      'risk.modify': 'Modifies files or system state',
      'risk.reviewerDowngrade': 'Reviewer judged the risk too high',

      'tool.ops_bash': 'Run a command',
      'tool.bash': 'Run a command',
      'tool.ops_pwsh': 'Run a PowerShell command',
      'tool.pwsh': 'Run a PowerShell command',
      'tool.write': 'Write a file',
      'tool.edit': 'Edit a file',
      'tool.read': 'Read a file',
      'tool.ops_read_files': 'Read files',
      'tool.glob': 'Find files',
      'tool.grep': 'Search file contents',
      'tool.subagent': 'Start a subagent',
      'tool.spawn_teammate': 'Start a teammate agent',
      'tool.workflow': 'Run a workflow',
      'tool.web_fetch': 'Fetch a web page',
      'tool.web_search': 'Search the web',
      'tool.skill': 'Load a skill',
      'tool.present': 'Present deliverables',
      'tool.install_bundle': 'Install a plugin',
      'tool.plugin_manager': 'Manage plugins',
      'tool.schedule_create': 'Create a schedule',

      'sync.strip': 'Confirmation needed · session sync',
      'sync.title.push': 'Push this machine\'s session changes to the sync remote?',
      'sync.title.pull': 'Pull the remote session changes into the local mirror?',
      'sync.explain.push': 'The push commits the local session files and uploads them to the configured sync remote. It never force-pushes: a rejected push reconciles by pulling first and retries once.',
      'sync.explain.pull': 'The pull downloads the remote session changes into the local sync mirror with a keep-both merge; local content is never silently overwritten.',
      'sync.note': 'Nothing runs until you confirm; cancelling uploads or downloads nothing.',
      'sync.btn.cancel': 'Cancel, do nothing (Esc)',
      'sync.btn.push': 'Confirm push (Enter)',
      'sync.btn.pull': 'Confirm pull (Enter)',
      'sync.hint': 'Enter = confirm · Esc = cancel',
      'sync.submitted': 'Submitted, syncing…',
      'sync.error': 'Submit failed; retry or reload the page.',
      'sync.original': 'English original (click to expand)',
      'sync.tool.push': 'Session sync push',
      'sync.tool.pull': 'Session sync pull',
    }

    /** ---------------------------------------------------------------- style */
    const css = [
      '.dazh_root{padding:8px calc(var(--dsh-composer-side-clearance) + 16px) 12px;display:flex;flex-direction:column;align-items:center}',
      '.dazh_card{width:100%;max-width:var(--dsh-chat-content-width);border:1px solid var(--dsw-alias-state-warn-secondary);border-radius:var(--dsw-radius-xl);background:var(--dsw-specific-input-major);box-shadow:var(--dsw-shadow-lv2);overflow:hidden;--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2)}',
      '.dazh_strip{display:flex;align-items:center;gap:8px;padding:10px 16px;font-size:13px;font-weight:500;line-height:18px;color:var(--dsw-alias-state-warn-primary);background:var(--dsw-alias-state-warn-tertiary)}',
      '.dazh_dot{flex:none;width:8px;height:8px;border-radius:999px;background:currentColor}',
      '.dazh_body{box-sizing:border-box;display:flex;flex-direction:column;gap:10px;max-height:min(520px, 60vh);padding:14px 16px 0;overflow-y:auto}',
      '.dazh_headline{font-size:15px;font-weight:600;line-height:24px;color:var(--dsw-alias-label-primary)}',
      '.dazh_meta{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}',
      '.dazh_toolTag{display:inline-flex;align-items:center;gap:6px;padding:1px 8px;border-radius:999px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);border:.5px solid var(--dsw-alias-border-l3)}',
      '.dazh_toolName{color:var(--dsw-alias-label-tertiary);font-family:var(--ds-font-family-code);font-size:11px}',
      '.dazh_text{font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-word}',
      '.dazh_sectionTitle{margin-bottom:3px;font-size:12px;line-height:18px;font-weight:500;color:var(--dsw-alias-label-tertiary)}',
      '.dazh_modeBox{display:flex;flex-direction:column;gap:2px;padding:8px 10px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-1);border:.5px solid var(--dsw-alias-border-l3)}',
      '.dazh_modeName{font-size:13px;line-height:20px;font-weight:600;color:var(--dsw-alias-label-primary)}',
      '.dazh_chips{display:flex;flex-wrap:wrap;gap:6px}',
      '.dazh_chip{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;font-size:12px;line-height:18px;color:var(--dsw-alias-state-warn-primary);background:var(--dsw-alias-state-warn-tertiary)}',
      '.dazh_detail{box-sizing:border-box;max-height:180px;padding:8px 10px;overflow:auto;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-1);border:.5px solid var(--dsw-alias-border-l3);font-family:var(--ds-font-family-code);font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-word}',
      '.dazh_originalBox{box-sizing:border-box;max-height:180px;padding:8px 10px;overflow:auto;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-1);border:.5px solid var(--dsw-alias-border-l3);font-family:var(--ds-font-family-code);font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary);white-space:pre-wrap;word-break:break-word}',
      '.dazh_details>summary{cursor:pointer;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary);user-select:none}',
      '.dazh_details>summary:hover{color:var(--dsw-alias-label-secondary)}',
      '.dazh_details[open]>summary{margin-bottom:6px}',
      '.dazh_effects{display:flex;flex-direction:column;gap:2px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}',
      '.dazh_effects b{font-weight:500;color:var(--dsw-alias-label-secondary)}',
      '.dazh_scope{padding:0 16px 2px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}',
      '.dazh_actions{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:12px 16px 14px}',
      '.dazh_hint{margin-right:auto;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}',
      '.dazh_btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:4px;height:36px;padding:0 14px;border:none;border-radius:var(--dsw-radius-md);cursor:pointer;font-size:14px;line-height:22px;color:var(--dsw-alias-label-primary);background:transparent}',
      '.dazh_btn:disabled{cursor:not-allowed;opacity:.4}',
      '.dazh_reject{border:.5px solid var(--dsw-alias-border-l3);background:transparent}',
      '.dazh_reject:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary);border-color:transparent}',
      '.dazh_allow{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}',
      '.dazh_allow:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}',
    ].join('')

    /** -------------------------------------------------------------- helpers */
    const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef]/

    const isChinese = (text) => typeof text === 'string' && CJK.test(text)

    /** Trim surrounding punctuation/whitespace away; undefined when nothing is left. */
    const cleanReason = (text) => {
      if (typeof text !== 'string') return undefined
      const value = text.replace(/^[\s：:，,。.；;、\-–—]+/, '').replace(/[\s]+$/, '')
      return value === '' ? undefined : value
    }

    const clip = (text, max) => {
      const value = String(text)
      return value.length > max ? value.slice(0, max) + '…' : value
    }

    const joinParts = (parts) => parts.filter((part) => part !== undefined && part !== null && part !== '').join('\n')

    /** Tool identifier → localized friendly label; unknown tools keep their name. */
    function toolLabel(t, toolName) {
      if (typeof toolName !== 'string' || toolName === '') return t('title.generic')
      const known = t('tool.' + toolName)
      return known === 'tool.' + toolName ? toolName : known
    }

    /** Ordered keyword scan over an English review reason, returned as locale keys. */
    const RISK_RULES = [
      { re: /install(?:ing|ed|s)?\s+(?:a\s+|the\s+)?(?:bundle|plugin|package)|dsh plugin add|package install/i, key: 'risk.install' },
      { re: /profile|configuration|config|settings|system[\s/]configuration/i, key: 'risk.config' },
      { re: /every session|all sessions|whole profile|live dsh|affects the entire/i, key: 'risk.profileWide' },
      { re: /ssh|remote|server|network|transfer|upload|sync|exfiltrat/i, key: 'risk.network' },
      { re: /delet|remov|eras|overwrit|destroy|wipe/i, key: 'risk.delete' },
      { re: /outside (?:the )?workspace|escalat|sandbox|privileg|full access|permission/i, key: 'risk.outside' },
      { re: /secret|credential|token|password|api[ _-]?key|sensitive/i, key: 'risk.secret' },
      { re: /production|deploy|prod\b/i, key: 'risk.prod' },
      { re: /irreversible|permanent|cannot be undone|no undo/i, key: 'risk.irreversible' },
      { re: /without (?:explicit )?(?:authorization|consent|approval)|not (?:explicitly )?authoriz|beyond .{0,24}scope|broader than|does not explicitly authorize/i, key: 'risk.unauthorized' },
      { re: /write|modify|change|patch|mutat/i, key: 'risk.modify' },
    ]

    function riskKeys(text, limit) {
      if (typeof text !== 'string' || text === '') return []
      const keys = []
      for (const rule of RISK_RULES) {
        if (rule.re.test(text) && !keys.includes(rule.key)) keys.push(rule.key)
        if (keys.length >= limit) break
      }
      return keys
    }

    /**
     * Read the pending approval's localized text and audit reason into a
     * presentation-neutral description.
     *
     * @param displayText - `displayReason` already resolved through the locale.
     * @param auditReason - the audit `reason` string (English by contract).
     * @returns {{variant: string, reason?: string, mode?: string, raw: string}}
     */
    function parseReason(displayText, auditReason) {
      const candidates = [displayText, auditReason].filter((text) => typeof text === 'string' && text.trim() !== '')
      for (const text of candidates) {
        let match = /^Auto review\s*(?:拒绝了此调用|denied this call)\s*[：:]?\s*([\s\S]*)$/i.exec(text)
        if (match !== null) return { variant: 'auto', reason: cleanReason(match[1]), raw: text }

        match = /^(?:允许本次操作使用|Allow this operation with)\s*([^\s：:]+)\s*(?:权限|permissions?)\s*[：:]\s*([\s\S]*)$/i.exec(text)
        if (match !== null) return { variant: 'escalate', mode: match[1], reason: cleanReason(match[2]), raw: text }

        match = /^escalate sandbox to\s*([^:：]+)[:：]\s*([\s\S]*)$/i.exec(text)
        if (match !== null) return { variant: 'escalate', mode: match[1].trim(), reason: cleanReason(match[2]), raw: text }
      }
      const primary = candidates[0]
      return { variant: 'generic', reason: primary, raw: primary ?? '' }
    }

    const MODE_KEYS = {
      'danger-full-access': 'full',
      'workspace-write': 'workspace',
      'read-only': 'readonly',
    }

    function modeFace(t, mode) {
      const key = MODE_KEYS[mode]
      if (key === undefined) return { name: mode ?? '', desc: t('mode.other.desc') }
      return { name: t('mode.' + key + '.name'), desc: t('mode.' + key + '.desc') }
    }

    /**
     * Recognize the session-sync plugin's fixed push/pull confirmation question.
     *
     * The plugin asks through the generic user-questions channel with hardcoded
     * English copy. We only take over that exact card; every other question stays
     * with the official question composer, so no third-party plugin is modified.
     */
    function recognizeSyncConfirm(pending) {
      if (pending === undefined || pending === null) return null
      if (pending.kind !== 'question') return null
      const questions = pending.questions
      if (!Array.isArray(questions) || questions.length !== 1) return null
      const question = questions[0]
      if (question === null || typeof question !== 'object') return null
      if (typeof question.question !== 'string' || !Array.isArray(question.options)) return null
      const labels = []
      for (const option of question.options) {
        if (option === null || typeof option !== 'object' || typeof option.label !== 'string') return null
        labels.push(option.label)
      }
      const text = question.question.trim()
      let action
      if (/^Push local session changes to the sync remote\?$/i.test(text)) action = 'push'
      else if (/^Pull remote session changes into the sync mirror\?$/i.test(text)) action = 'pull'
      else return null
      const approveLabel = action === 'push' ? 'Push' : 'Pull'
      if (!labels.includes(approveLabel) || !labels.includes('Cancel')) return null
      return { pending, question, action, approveLabel, cancelLabel: 'Cancel' }
    }

    /** Chinese confirmation card for the session-sync plugin's push/pull question. */
    function SyncConfirmPanelZh(props) {
      const matched = props.matched
      const t = props.t
      const [busy, setBusy] = React.useState(false)
      const [failed, setFailed] = React.useState(false)
      const active = React.useRef(true)

      React.useEffect(() => {
        active.current = true
        return () => {
          active.current = false
        }
      }, [])

      if (matched === undefined || matched === null) return null
      const { pending, question, action, approveLabel, cancelLabel } = matched

      const submit = (label) => {
        if (busy) return
        setBusy(true)
        setFailed(false)
        let channel
        try {
          channel = typeof pending.snapshot === 'function' ? pending.snapshot().channel : undefined
        } catch {
          channel = undefined
        }
        Promise.resolve(pending.answer({ answers: [{ id: question.id, selected: [label] }] }))
          .then(() => {
            if (channel === 'rpc' && typeof pending.dismiss === 'function') {
              Promise.resolve(pending.dismiss()).catch(() => {})
            }
          })
          .catch(() => {
            if (!active.current) return
            setBusy(false)
            setFailed(true)
          })
      }

      const keydown = (event) => {
        const element = event.target
        if (event.defaultPrevented) return
        if (!(element instanceof Element) || !event.currentTarget.contains(document.activeElement)) return
        if (element.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]') !== null) return
        if (event.key !== 'Enter' && event.key !== 'Escape') return
        if (event.key === 'Enter' && element.closest('button, a[href], [role="button"]') !== null) return
        if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return
        event.preventDefault()
        event.stopPropagation()
        if (event.repeat || event.nativeEvent.isComposing || event.keyCode === 229) return
        submit(event.key === 'Enter' ? approveLabel : cancelLabel)
      }

      const toolKey = action === 'push' ? 'sync.tool.push' : 'sync.tool.pull'
      const titleKey = action === 'push' ? 'sync.title.push' : 'sync.title.pull'
      const explainKey = action === 'push' ? 'sync.explain.push' : 'sync.explain.pull'
      const allowKey = action === 'push' ? 'sync.btn.push' : 'sync.btn.pull'
      const original = [question.question, typeof question.detail === 'string' ? question.detail : '']
        .filter((part) => part !== '')
        .join('\n\n')

      return h(
        'div',
        {
          className: 'dazh_root',
          'data-question-key': typeof pending.key === 'string' ? pending.key : undefined,
          'aria-busy': busy,
          'aria-label': t(titleKey),
          role: 'group',
          onKeyDown: keydown,
        },
        h(
          'div',
          { className: 'dazh_card' },
          h('div', { className: 'dazh_strip' }, h('span', { className: 'dazh_dot' }), t('sync.strip')),
          h(
            'div',
            { className: 'dazh_body', tabIndex: 0, role: 'group', 'aria-label': t('aria.detail') },
            h('div', { className: 'dazh_headline' }, t(titleKey)),
            h(
              'div',
              { className: 'dazh_meta' },
              h(
                'span',
                { className: 'dazh_toolTag' },
                t('label.tool'),
                h('b', null, t(toolKey)),
                h('span', { className: 'dazh_toolName' }, action === 'push' ? 'sync_push' : 'sync_pull'),
              ),
            ),
            h('div', { className: 'dazh_text' }, t(explainKey)),
            h(
              'div',
              { className: 'dazh_section dazh_details' },
              h('details', { className: 'dazh_details' }, [
                h('summary', { key: 'summary' }, t('sync.original')),
                h('pre', { key: 'text', className: 'dazh_originalBox' }, original),
              ]),
            ),
          ),
          h('div', { className: 'dazh_scope' }, t('sync.note')),
          h(
            'div',
            { className: 'dazh_actions' },
            h('div', { className: 'dazh_hint' }, busy ? t('sync.submitted') : failed ? t('sync.error') : t('sync.hint')),
            h(
              'button',
              {
                type: 'button',
                className: 'dazh_btn dazh_reject',
                disabled: busy,
                onClick: () => {
                  submit(cancelLabel)
                },
              },
              t('sync.btn.cancel'),
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dazh_btn dazh_allow',
                disabled: busy,
                onClick: () => {
                  submit(approveLabel)
                },
              },
              t(allowKey),
            ),
          ),
        ),
      )
    }

    /** Tool call arguments worth showing next to the approval: command / path / description. */
    function argsFace(argsRaw) {
      let args
      try {
        args = JSON.parse(argsRaw)
      } catch {
        return undefined
      }
      if (args === null || typeof args !== 'object' || Array.isArray(args)) return undefined
      const command = typeof args.command === 'string' ? args.command : undefined
      const path = typeof args.path === 'string' ? args.path : typeof args.file_path === 'string' ? args.file_path : undefined
      const description = typeof args.description === 'string' ? args.description : undefined
      if (command === undefined && path === undefined && description === undefined) return undefined
      return {
        command: command === undefined ? undefined : clip(command, 4000),
        path: path === undefined ? undefined : clip(path, 600),
        description: description === undefined ? undefined : clip(description, 600),
      }
    }

    /**
     * The Chat Tool node correlated with the pending approval, as its command /
     * path / description face. Uses the session-standard `useChat` hook exposed
     * to every session-scope slot; absent when Chat is not composed.
     */
    function ApprovalCommand(props) {
      const argsRaw = props.useChat((snapshot) => {
        for (const node of snapshot.nodes.values()) {
          const root = node.kind === 'tool-call' ? node.data.root : undefined
          if (root === undefined || root.callId !== props.callId) continue
          if ('kind' in root || root.phase !== 'start') continue
          return typeof root.argsRaw === 'string' ? root.argsRaw : null
        }
        return null
      })
      const detail = argsRaw === null || argsRaw === undefined ? undefined : argsFace(argsRaw)
      if (detail === undefined) return null
      const blocks = []
      if (detail.description !== undefined) {
        blocks.push(
          h(
            'div',
            { key: 'description' },
            h('div', { className: 'dazh_sectionTitle' }, props.t('label.description')),
            h('div', { className: 'dazh_text' }, detail.description),
          ),
        )
      }
      if (detail.command !== undefined) {
        blocks.push(
          h(
            'div',
            { key: 'command' },
            h('div', { className: 'dazh_sectionTitle' }, props.t('label.command')),
            h('pre', { className: 'dazh_detail' }, detail.command),
          ),
        )
      } else if (detail.path !== undefined) {
        blocks.push(
          h(
            'div',
            { key: 'path' },
            h('div', { className: 'dazh_sectionTitle' }, props.t('label.tool')),
            h('div', { className: 'dazh_detail' }, detail.path),
          ),
        )
      }
      return h('div', { className: 'dazh_sections' }, blocks)
    }

    /** --------------------------------------------------------------- panel */
    function ApprovalPanelZh(props) {
      const pending = props.matched
      const t = props.t
      const [answered, setAnswered] = React.useState(false)
      const waiting = React.useRef(false)
      const active = React.useRef(true)
      const composing = React.useRef(false)
      const compositionEnded = React.useRef(false)

      React.useEffect(() => {
        active.current = true
        return () => {
          active.current = false
        }
      }, [])

      const answer = (outcome) => {
        if (waiting.current || pending === undefined || pending === null) return
        if (typeof pending.answerable === 'boolean' && !pending.answerable) return
        waiting.current = true
        setAnswered(true)
        Promise.resolve(pending.answer(outcome)).catch(() => {
          if (!active.current) return
          if (typeof pending.answerable === 'boolean' && !pending.answerable) return
          waiting.current = false
          setAnswered(false)
        })
      }

      const keydown = (event) => {
        const element = event.target
        if (event.defaultPrevented) return
        if (!(element instanceof Element) || !event.currentTarget.contains(document.activeElement)) return
        if (element.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]') !== null) return
        if (event.key !== 'Enter' && event.key !== 'Escape') return
        if (event.key === 'Enter' && element.closest('button, a[href], [role="button"]') !== null) return
        if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return
        event.preventDefault()
        event.stopPropagation()
        if (event.repeat || composing.current || compositionEnded.current || event.nativeEvent.isComposing || event.keyCode === 229) return
        answer(event.key === 'Enter' ? 'allowed-once' : 'rejected')
      }

      if (pending === undefined || pending === null) return null

      let displayText
      try {
        displayText = pending.displayReason === undefined ? undefined : props.resolveReason(pending.displayReason)
      } catch {
        displayText = undefined
      }
      const parsed = parseReason(displayText, pending.reason)
      const rawReason = parsed.reason !== undefined && parsed.reason !== '' ? parsed.reason : undefined
      const rawIsChinese = isChinese(rawReason)
      const showOriginal = rawReason !== undefined && !rawIsChinese

      const mode = parsed.variant === 'escalate' ? modeFace(t, parsed.mode) : undefined
      const risks = riskKeys(showOriginal ? rawReason : parsed.raw, 5)
      if (parsed.variant === 'auto' && risks.length === 0) risks.push('risk.reviewerDowngrade')
      const label = toolLabel(t, pending.toolName)
      const toolMeta =
        pending.toolName !== undefined && pending.toolName !== '' && pending.toolName !== label
          ? h('span', { className: 'dazh_toolName' }, pending.toolName)
          : null

      const strip =
        parsed.variant === 'auto' ? t('strip.auto') : parsed.variant === 'escalate' ? t('strip.escalate') : t('strip.generic')
      const title =
        parsed.variant === 'auto'
          ? t('title.auto')
          : parsed.variant === 'escalate'
            ? t('title.escalate')
            : pending.toolName !== undefined && pending.toolName !== ''
              ? t('title.genericTool', { tool: label })
              : t('title.generic')
      const explain =
        parsed.variant === 'auto' ? t('explain.auto') : parsed.variant === 'escalate' ? t('explain.escalate') : t('explain.generic')
      const allowEffect =
        parsed.variant === 'auto'
          ? t('allow.auto')
          : parsed.variant === 'escalate'
            ? t('allow.escalate', { mode: mode.name })
            : t('allow.generic')

      const bodyChildren = [
        h('div', { key: 'headline', className: 'dazh_headline' }, title),
        h(
          'div',
          { key: 'meta', className: 'dazh_meta' },
          h('span', { className: 'dazh_toolTag' }, t('label.tool'), h('b', null, label), toolMeta),
          mode !== undefined ? h('span', null, t('mode.escalateTo', { mode: mode.name })) : null,
        ),
        h('div', { key: 'explain', className: 'dazh_text' }, explain),
      ]

      if (mode !== undefined) {
        bodyChildren.push(
          h(
            'div',
            { key: 'mode', className: 'dazh_section' },
            h('div', { className: 'dazh_sectionTitle' }, t('mode.heading')),
            h(
              'div',
              { className: 'dazh_modeBox' },
              h('div', { className: 'dazh_modeName' }, '「' + mode.name + '」'),
              h('div', { className: 'dazh_text' }, mode.desc),
            ),
          ),
        )
      }

      if (risks.length > 0) {
        bodyChildren.push(
          h(
            'div',
            { key: 'risks', className: 'dazh_section' },
            h('div', { className: 'dazh_sectionTitle' }, t('label.risk')),
            h(
              'div',
              { className: 'dazh_chips' },
              risks.map((key) => h('span', { key, className: 'dazh_chip' }, t(key))),
            ),
          ),
        )
      }

      if (pending.callId !== undefined && typeof props.useChat === 'function') {
        bodyChildren.push(
          h(ApprovalCommand, { key: 'command', callId: pending.callId, useChat: props.useChat, t }),
        )
      }

      if (rawReason !== undefined) {
        const originalLabelKey = parsed.variant === 'auto' ? 'label.reasonAuto' : 'label.reasonOriginal'
        bodyChildren.push(
          h(
            'div',
            { key: 'reason', className: 'dazh_section' },
            showOriginal
              ? h('details', { className: 'dazh_details' }, [
                  h('summary', { key: 'summary' }, t(originalLabelKey)),
                  h('pre', { key: 'text', className: 'dazh_originalBox' }, rawReason),
                ])
              : [
                  h('div', { key: 'title', className: 'dazh_sectionTitle' }, t('label.reason')),
                  h('div', { key: 'text', className: 'dazh_text' }, rawReason),
                ],
          ),
        )
      }

      bodyChildren.push(
        h(
          'div',
          { key: 'effects', className: 'dazh_effects' },
          h('div', null, h('b', null, t('label.allowEffect') + '：'), allowEffect),
          h('div', null, t('reject.effect')),
        ),
      )

      return h(
        'div',
        {
          className: 'dazh_root',
          'data-approval-key': typeof pending.key === 'string' ? pending.key : undefined,
          'aria-busy': answered,
          'aria-label': t('aria.card'),
          role: 'group',
          onKeyDown: keydown,
          onKeyUpCapture: () => {
            compositionEnded.current = false
          },
          onCompositionStartCapture: () => {
            composing.current = true
          },
          onCompositionEndCapture: () => {
            composing.current = false
            compositionEnded.current = true
          },
        },
        h(
          'div',
          { className: 'dazh_card' },
          h('div', { className: 'dazh_strip' }, h('span', { className: 'dazh_dot' }), strip),
          h('div', { className: 'dazh_body', 'data-approval-scroll': '', tabIndex: 0, role: 'group', 'aria-label': t('aria.detail') }, bodyChildren),
          h('div', { className: 'dazh_scope' }, t('scope.note')),
          h(
            'div',
            { className: 'dazh_actions' },
            h('div', { className: 'dazh_hint' }, answered ? t('answered') : t('hint.keys')),
            h(
              'button',
              {
                type: 'button',
                className: 'dazh_btn dazh_reject',
                disabled: answered,
                onClick: () => {
                  answer('rejected')
                },
              },
              t('btn.reject'),
            ),
            h(
              'button',
              {
                type: 'button',
                className: 'dazh_btn dazh_allow',
                disabled: answered,
                onClick: () => {
                  answer('allowed-once')
                },
              },
              t('btn.allow'),
            ),
          ),
        ),
      )
    }

    /** ---------------------------------------------------------------- apply */
    const inject = ['slots', 'locale']

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'approval-zh: dictionaries')

      ctx.effect(() => {
        const tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-approval-zh'
        tag.dataset.pluginCss = 'dsh-approval-zh/ApprovalPanelZh.css'
        tag.textContent = css
        document.head.appendChild(tag)
        return () => {
          tag.remove()
        }
      }, 'approval-zh: styles')

      ctx.inject(['shortcuts'], (scope) => {
        const t = ctx.locale.bind(NS)
        scope.effect(
          () =>
            scope.shortcuts.registerFixed({
              id: 'approvalZh.allow',
              label: () => t('btn.allow'),
              keys: ['Enter'],
              bindings: [{ code: 'Enter', modifiers: [] }],
              group: 'approval',
            }),
          'approval-zh: fixed allow reference',
        )
        scope.effect(
          () =>
            scope.shortcuts.registerFixed({
              id: 'approvalZh.reject',
              label: () => t('btn.reject'),
              keys: ['Esc'],
              bindings: [{ code: 'Escape', modifiers: [] }],
              group: 'approval',
            }),
          'approval-zh: fixed reject reference',
        )
      })

      ctx.slots.inject('conversation.composer', () =>
        ctx.slots.register(
          {
            name: 'conversation.composer',
            priority: 0,
            select: ({ pendingInteraction }) => {
              if (pendingInteraction === undefined || pendingInteraction === null) return null
              if (pendingInteraction.kind !== 'approval') return null
              if (typeof pendingInteraction.answer !== 'function') return null
              if (pendingInteraction.answerable === false) return null
              return pendingInteraction
            },
            locale: NS,
            inject: () => ({ resolveReason: (reason) => ctx.locale.resolveText(reason) }),
          },
          ApprovalPanelZh,
        ),
      )

      // Recognized session-sync confirmations: a Chinese yes/no card. Unknown
      // questions are left to the official question composer (selector returns
      // null), so no other question UI is affected.
      ctx.slots.inject('conversation.composer', () =>
        ctx.slots.register(
          {
            name: 'conversation.composer',
            priority: -1,
            select: ({ pendingInteraction }) => {
              try {
                return recognizeSyncConfirm(pendingInteraction)
              } catch {
                return null
              }
            },
            locale: NS,
          },
          SyncConfirmPanelZh,
        ),
      )
    }

    return {
      name: 'dsh-approval-zh',
      inject,
      apply,
    }
  },
})
