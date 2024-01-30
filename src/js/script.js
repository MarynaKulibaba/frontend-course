const requiredSkills = ['Git', 'HTML', 'CSS', 'JavaScript']

// 1
const createCandidate = function (candidateName, skillset) {
  if (candidateName?.trim().length <= 0) {
    throw Error('Name of candidate is required')
  }
  if (!Array.isArray(skillset) || skillset.length <= 0) {
    throw Error('Skills are required')
  }

  return { candidateName: candidateName, skillset: skillset }
}

// 2
const addRequirement = function (requirement, listOfRequirements) {
  if (requirement?.trim().length <= 0) {
    throw Error('Requirement is required')
  }
  if (!Array.isArray(listOfRequirements) || listOfRequirements.length <= 0) {
    throw Error('Skills are required')
  }
  if (!listOfRequirements.includes(requirement)) {
    listOfRequirements.push(requirement)
  }
}

addRequirement('React', requiredSkills)

// 3
const conductInterview = function (candidate, requirementsList) {
  let skillMatch = 0
  const score = 100 / requirementsList.length
  requirementsListCycle: for (let i = 0; i < requirementsList.length; i += 1) {
    for (let j = 0; j < candidate.skillset.length; j += 1) {
      if (requirementsList[i] === candidate.skillset[j]) {
        skillMatch += score
        continue requirementsListCycle
      }
    }
  }
  return skillMatch
}

// 4
const scheduleInterviews = function (candidates, requirements, evaluate) {
  const result = []
  for (let i = 0; i < candidates.length; i += 1) {
    const score = evaluate(candidates[i], requirements)
    result.push({
      score: score,
      candidate: candidates[i],
    })
  }
  return result
}

const candidate1 = createCandidate('Robert', [
  'Git',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
])
const candidate2 = createCandidate('Sam', ['HTML', 'JavaScript'])
const candidate3 = createCandidate('Bob Dilan', ['Git', 'HTML', 'CSS'])
const candidates = [candidate1, candidate2, candidate3]

console.log(scheduleInterviews(candidates, requiredSkills, conductInterview))
