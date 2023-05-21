export type VimCommand = {
  name: string;
  description: string;
};

export type VimCommands = {
  [category: string]: VimCommand[];
};

export const commands: VimCommands = {
  navigation: [
    { name: "h", description: "Move left" },
    { name: "j", description: "Move down" },
    { name: "k", description: "Move up" },
    { name: "l", description: "Move right" },
    { name: "w", description: "Move to the beginning of the next word" },
    { name: "b", description: "Move to the beginning of the previous word" },
    { name: "0", description: "Move to the beginning of the line" },
    { name: "$", description: "Move to the end of the line" },
    { name: "gg", description: "Move to the first line of the document" },
    { name: "G", description: "Move to the last line of the document" },
    { name: "Ctrl + b", description: "Scroll up one page" },
    { name: "Ctrl + f", description: "Scroll down one page" },
  ],
  editing: [
    { name: "i", description: "Insert before the cursor" },
    { name: "a", description: "Insert after the cursor" },
    { name: "o", description: "Insert a new line below the current line" },
    { name: "O", description: "Insert a new line above the current line" },
    { name: "dd", description: "Delete the current line" },
    { name: "dw", description: "Delete from the cursor to the beginning of the next word" },
    { name: "db", description: "Delete from the cursor to the beginning of the previous word" },
    { name: "d0", description: "Delete from the cursor to the beginning of the line" },
    { name: "d$", description: "Delete from the cursor to the end of the line" },
    { name: "yy", description: "Yank (copy) the current line" },
    { name: "p", description: "Paste the last yanked or deleted text after the cursor" },
    { name: "u", description: "Undo the last change" },
    { name: "Ctrl + r", description: "Redo the last change" },
  ],
  searchAndReplace: [
    { name: "/pattern", description: "Search forward for 'pattern'" },
    { name: "?pattern", description: "Search backward for 'pattern'" },
    { name: "n", description: "Move to the next occurrence of the search pattern" },
    { name: "N", description: "Move to the previous occurrence of the search pattern" },
    { name: ":%s/old/new/g", description: "Replace all occurrences of 'old' with 'new' in the entire file" },
    { name: ":s/old/new/g", description: "Replace all occurrences of 'old' with 'new' in the current line" },
    { name: ":s/old/new/gc", description: "Replace all occurrences of 'old' with 'new' in the current line with confirmation" },
  ],
  copyAndPaste: [
    { name: "yy", description: "Yank (copy) the current line" },
    { name: "yw", description: "Yank (copy) from the cursor to the beginning of the next word" },
    { name: "y$", description: "Yank (copy) from the cursor to the end of the line" },
    { name: "dd", description: "Delete the current line and yank it" },
    { name: "dw", description: "Delete from the cursor to the beginning of the next word and yank it" },
    { name: "p", description: "Paste the last yanked or deleted text after the cursor" },
    { name: "P", description: "Paste the last yanked or deleted text before the cursor" },
  ],
  savingAndQuitting: [
    { name: ":w", description: "Save the file" },
    { name: ":w filename", description: "Save the file with the specified filename" },
    { name: ":q", description: "Quit Vim (if there are no unsaved changes)" },
    { name: ":q!", description: "Quit Vim and discard any unsaved changes" },
    { name: ":wq", description: "Save the file and quit Vim" },
    { name: ":x", description: "Save the file and quit Vim (same as :wq)" },
  ],
  splitWindows: [
    { name: ":split", description: "Split the current window horizontally" },
    { name: ":vsplit", description: "Split the current window vertically" },
    { name: "Ctrl + w + h", description: "Move to the left window" },
    { name: "Ctrl + w + j", description: "Move to the window below" },
    { name: "Ctrl + w + k", description: "Move to the window above" },
    { name: "Ctrl + w + l", description: "Move to the right window" },
    { name: "Ctrl + w + w", description: "Cycle through windows" },
  ],
};
