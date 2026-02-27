# My Personal Portfolio - Customization Guide

Welcome to your new portfolio! This guide will help you personalize it with your own content.

---

## Quick Start Checklist

### 1. Personal Information (index.html)
Search and replace these placeholders:

| Placeholder | Replace With |
|-------------|--------------|
| `[Your Name]` | Your actual name |
| `Full Stack Developer` | Your job title/role |
| `your.email@example.com` | Your email address |
| `+1 (234) 567-890` | Your phone number |
| `[Your City, Country]` | Your location |
| `[Your hobbies/interests here]` | Your interests |
| `[Your Degree]` | Your degree/certification |
| `[University Name]` | Your school name |
| `[Job Title]` | Your job title |
| `[Company Name]` | Your employer |

---

### 2. Images to Add

#### Profile Photo
- Add your profile photo to: `assets/img/logo/`
- Name it: `profile-placeholder.png` (or update the filename in index.html)
- Recommended size: 400x400 pixels, square format

#### Project Screenshots
Add screenshots to these folders:

**Project 1:** `assets/img/project1/`
- screenshot1.png
- screenshot2.png
- screenshot3.png

**Project 2:** `assets/img/project2/`
- screenshot1.png
- screenshot2.png
- screenshot3.png

**Project 3:** `assets/img/project3/`
- screenshot1.png
- screenshot2.png
- screenshot3.png

#### Resume
- Add your resume PDF to the root folder
- Update the "Download Resume" link in index.html

---

### 3. Update Project Information

In the Projects section, update:
- Project titles (e.g., "Project One" → "E-Commerce App")
- Project descriptions
- Screenshot alt texts

---

### 4. Social Media Links

Find and update these links in index.html:
- LinkedIn: Search for `fab fa-linkedin`
- GitHub: Search for `fab fa-github`
- Twitter: Search for `fab fa-twitter`

---

### 5. Skills & Tech Stack

Update the skills in:
- **Skills Section**: Modify the three service boxes (Web Development, Mobile Development, Backend & APIs)
- **About Me Section**: Update the tech stack tags (JavaScript, React, Node.js, etc.)

---

### 6. Color Scheme (Optional)

The main accent color is `#3b82f6` (bright blue). To change it:
1. Open `assets/css/main.css`
2. Search for `#3b82f6`
3. Replace with your preferred color

---

## File Structure

```
├── index.html              ← Main portfolio file
├── README.md               ← This guide
├── index_original_backup.html  ← Backup of original
├── assets/
│   ├── css/
│   │   └── main.css        ← Styling
│   ├── img/
│   │   ├── logo/           ← Profile photo & logos
│   │   ├── project1/       ← Project 1 screenshots
│   │   ├── project2/       ← Project 2 screenshots
│   │   └── project3/       ← Project 3 screenshots
│   └── js/
│       └── functions.js    ← JavaScript functionality
```

---

## Adding More Projects

To add a 4th project:
1. Copy one of the existing project slider items
2. Update button ID to `discoverButton4`
3. Create `containerSlide4` div for detail view
4. Add corresponding JavaScript and slideshow functions
5. Create `assets/img/project4/` folder for screenshots

---

## Need Help?

Common issues:
- **Images not showing**: Check file paths and ensure images exist
- **Slider not working**: Verify JavaScript is loading correctly
- **Layout broken**: Check for unclosed HTML tags

---

Enjoy your new portfolio! 🚀
