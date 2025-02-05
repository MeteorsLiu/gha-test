import * as core from '@actions/core'
import * as github from '@actions/github'
/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const sha: string = core.getInput('sha')
    const token = core.getInput('token')
    console.log(github.getOctokit(token))
    core.debug(sha)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
