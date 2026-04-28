import re

file_path = r'c:\Users\Łukasz\Desktop\programowanie\portfolio\style.css'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix button texts
content = content.replace(
'''#button__projects,
.kafelek__podglad {
    background-color: var(--accent-blue);
    box-shadow: 0px 0px 10px var(--accent-blue);
    padding: 15px;
    border: none;
    color: var(--text-primary);
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    transition: 300ms;
}''',
'''#button__projects,
.kafelek__podglad {
    background-color: var(--accent-blue);
    box-shadow: 0px 10px 20px rgba(139, 92, 246, 0.3);
    padding: 15px;
    border: none;
    color: #ffffff;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    transition: 300ms;
}''')

# Fix secondary button text
content = content.replace(
'''#button__contact {
    background-color: var(--glass-bg);
    padding: 15px;
    border: none;
    color: var(--text-primary);
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    transition: 300ms;
}''',
'''#button__contact {
    background-color: #ffffff;
    padding: 15px 25px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    color: var(--accent-blue);
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    transition: 300ms;
    box-shadow: 0px 5px 15px rgba(31, 38, 135, 0.05);
}''')

# Fix header
content = content.replace(
'''header {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5000px;
    width: 80%;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    display: flex;
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
    background-color: var(--glass-bg);
    backdrop-filter: blur(10px);
    z-index: 9999;
}''',
'''header {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5000px;
    width: 80%;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    display: flex;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
    z-index: 9999;
}''')

content = content.replace(
'''.kafelek__podglad {
    font-size: 15px;
    margin: auto;
    background-color: var(--glass-bg);
    box-shadow: none;
    border: 1px solid var(--glass-border);
}''',
'''.kafelek__podglad {
    font-size: 15px;
    margin: auto;
    background-color: #ffffff;
    color: var(--accent-blue);
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 50px;
    padding: 10px 20px;
}''')

content = content.replace(
'''#button__contact:hover,
.kafelek__podglad:hover {
    transform: translateY(-5px);
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 20px var(--glass-bg);
}''',
'''#button__contact:hover,
.kafelek__podglad:hover {
    transform: translateY(-5px);
    cursor: pointer;
    background-color: rgba(139, 92, 246, 0.05);
    box-shadow: 0px 10px 20px rgba(139, 92, 246, 0.15);
}''')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
