"""
"Parse" model.js file set the needed variables to the global scope and remove empty lines.
"""

with open('public/js/model.js', 'r') as file:
    content = file.read()

lines = content.splitlines()
new_lines = []
passed_process = False
vars = []
    
for line in lines:
    if not line:
        continue

    if line == "if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {":
        passed_process = True
    
    if not passed_process:
        new_lines.append(line)
        continue
        
    if 'layers = ' in line or 'bias = ' in line or 'weights = ' in line:
        vars.append(line)
        

new_lines += vars

# Save file with new lines
with open('public/js/model.js', 'w') as file:
    for nline in new_lines:
        file.write(nline)
        file.write('\n')
