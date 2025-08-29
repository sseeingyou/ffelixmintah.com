# Git & Git LFS Cheat Sheet for Large Assets

## 1. Stage All Changes
```
git add .
```

## 2. Commit Changes
```
git commit -m "Your commit message"
```

## 3. Push to GitHub
```
git push
```

---

## If Push Fails Due to Large Files:

### 4. Install Git LFS (one-time setup)
```
brew install git-lfs
git lfs install
```

### 5. Track Large File Types (run once per file type)
```
git lfs track "assets/*.jpg" "assets/*.jpeg" "assets/*.png" "assets/*.mp4"
```

### 6. Add .gitattributes and Assets Again
```
git add .gitattributes assets/
```

### 7. Commit LFS Tracking
```
git commit -m "Track large assets with Git LFS"
```

### 8. Push Again
```
git push
```

---

## Notes
- Only need to install and track file types with LFS once per repo.
- For new large files, just `git add`, `commit`, and `push` as usual.
- LFS will handle large files automatically after setup.

---

## Useful Commands
- See what files are tracked by LFS:
  ```
  git lfs ls-files
  ```
- See LFS status:
  ```
  git lfs status
  ```
- Untrack a file type:
  ```
  git lfs untrack "pattern"
  ```

---

For more, see: https://git-lfs.github.com/
