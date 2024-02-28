type Rule = 'combine' | 'replace'

export function useConditionalClassName(expression: boolean, caseClass: string, defClass: string, rule: Rule){
    if(expression){
        if(rule === 'combine') return [caseClass, defClass].join(' ')
        return caseClass
    }
    return defClass
}