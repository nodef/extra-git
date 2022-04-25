import * as C from "child_process";
import {kebabCase} from "./_string";


/**
 * Convert options object to arguments.
 * @param options options object
 */
function toArguments(options: any): string[] {
  var o = options, a = [];
  for (var k in o) {
    var f = kebabCase(k);
    a.push(`--${f}`);
    if (typeof o[k] !== 'boolean') a.push(o[k]);
  }
  return a;
}


export interface Result {
  stdout: string,
  stderr: string,
}


function exec(args: readonly string[], options?: C.ExecFileOptions): Promise<Result> {
  return new Promise((resolve, reject) => {
    C.execFile("git", args, options, (err, stdout, stderr) => {
      if (err != null) reject(err);
      else resolve({stdout, stderr});
    });
  });
}


function execSync(args: readonly string[], options?: C.ExecFileOptions): string {
  return C.execFileSync("git", args, options).toString();
}




// WRITE-TREE
// ----------

/** Options to create a tree object from the current index. */
export interface WriteTreeOptions {
  /**
   * Normally git `write-tree` ensures that the objects referenced by the
   * directory exist in the object database. This option disables this check.
   */
  missingOk: boolean,
  /**
   * Writes a tree object that represents a subdirectory `<prefix>`. This can
   * be used to write the tree object for a subproject that is in the named
   * subdirectory.
   */
  prefix: string,
}


/**
 * Create a tree object from the current index.
 *
 * @summary
 * Creates a tree object using the current index. The name of the new tree object
 * is printed to standard output.
 *
 * The index must be in a fully merged state.
 *
 * Conceptually, git `write-tree` sync()s the current index contents into a set of
 * tree files. In order to have that match what is actually in your directory right
 * now, you need to have done a git update-index phase before you did the git
 * `write-tree`.
 * @param options write tree options {missingOk, prefix}
 */
export function writeTree(options: WriteTreeOptions): Promise<Result> {
  return exec(toArguments(options));
}

/**
 * Create a tree object from the current index.
 *
 * @summary
 * Creates a tree object using the current index. The name of the new tree object
 * is printed to standard output.
 *
 * The index must be in a fully merged state.
 *
 * Conceptually, git `write-tree` sync()s the current index contents into a set of
 * tree files. In order to have that match what is actually in your directory right
 * now, you need to have done a git update-index phase before you did the git
 * `write-tree`.
 * @param options write tree options {missingOk, prefix}
 */
export function writeTreeSync(options: WriteTreeOptions): string {
  return execSync(toArguments(options));
}
