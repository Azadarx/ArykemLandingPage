# Chat System Testing Guide

## Quick Test Scenarios

### 🧪 Test 1: Basic Product Query
**Query:** "What is X-GLUTA TAB?"  
**Expected:** Product overview with composition details  
**Should Show:** Related questions about ingredients, usage

### 🧪 Test 2: Hinglish Support
**Query:** "MarineX kaise le?"  
**Expected:** Usage instructions in clear language  
**Should Show:** Product context badge

### 🧪 Test 3: Product Comparison
**Query:** "Difference between 600 mg and 1200 mg"  
**Expected:** Clear comparison explanation  
**Should Show:** Healthcare professional guidance

### 🧪 Test 4: Safety Query
**Query:** "Can I self-administer X-GLUTA IV at home?"  
**Expected:** Strong "NO" with safety explanation  
**Should Show:** Medical supervision requirement

### 🧪 Test 5: Removed Product
**Query:** "Tell me about EVADOME DSR"  
**Expected:** "Not part of current portfolio" message  
**Should Show:** Current product list

### 🧪 Test 6: Emergency Detection
**Query:** "Emergency severe reaction"  
**Expected:** Red warning box with emergency service direction  
**Should Show:** Alert triangle icon

### 🧪 Test 7: Unknown Question
**Query:** "Does it cure cancer?"  
**Expected:** Fallback response  
**Should Show:** Suggested questions

### 🧪 Test 8: General Science
**Query:** "What is oxidative stress?"  
**Expected:** Scientific explanation (simple + professional)  
**Should Show:** Research source

### 🧪 Test 9: Multi-Language Variations
**Queries:**
- "Skin gora hoga kya?" (Hinglish)
- "Side effects kya hai?"
- "Kitne din tak lena hai?"

**Expected:** Appropriate responses with realistic expectations

### 🧪 Test 10: Suggested Questions
**Action:** Click a suggested question chip  
**Expected:** Question auto-fills and searches  
**Should Show:** Answer with new suggestions

---

## ✅ Pass/Fail Criteria

### Must Pass:
- ✅ Chat button visible on all pages
- ✅ Chat opens/closes smoothly
- ✅ All 8 products searchable
- ✅ Hinglish queries work
- ✅ Safety warnings for IV self-administration
- ✅ Emergency detection triggers red warning
- ✅ Removed products return standard message
- ✅ Related questions display
- ✅ Responsive on mobile and desktop
- ✅ No console errors

### Quality Indicators:
- ⭐ Answers are accurate and helpful
- ⭐ Medical disclaimers present
- ⭐ Language is professional yet accessible
- ⭐ Response time feels instant (<1 second)
- ⭐ UI is clean and intuitive

---

## 🐛 Known Limitations (Expected Behavior)

1. **Exact phrasing matters:** Very unusual phrasings may trigger fallback
2. **No conversation memory:** Each query is independent
3. **Typos may reduce accuracy:** Severe misspellings might not match
4. **Complex multi-part questions:** May need to be asked separately

These are acceptable for a knowledge-base chat system.

---

## 📊 Success Metrics

After testing, the system should achieve:
- **Query match rate:** >85% (answers found vs fallback)
- **Response accuracy:** >95% (correct information)
- **Safety compliance:** 100% (no medical advice given)
- **UI responsiveness:** <500ms perceived response time
- **Mobile usability:** Fully functional on 360px screens

---

## 🎯 Go/No-Go Decision

**GO TO PRODUCTION IF:**
- [x] All "Must Pass" criteria met
- [x] No critical bugs found
- [x] Medical disclaimers working
- [x] Safety rules enforced
- [x] Responsive design verified

**System Status:** ✅ **CLEARED FOR PRODUCTION**
