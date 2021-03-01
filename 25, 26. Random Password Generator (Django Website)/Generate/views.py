from django.shortcuts import render
import random
import string
import symbol


def index(request):
    return render(request, 'index.html')


def generate(request):
    random_texts = ''
    random_texts += string.ascii_letters
    symbols = request.GET.get('symbols')
    length = request.GET.get('length')
    numbers = request.GET.get('numbers')
    count = request.GET.get('count')
    common = request.GET.get('common')

    if numbers:
        random_texts += string.digits

    if symbols:
        random_texts += "!@#$%^&*"

    multiple_password = []
    password = ''
    if len(length) < 1:
        length = '14'
    if not count:
        if not common:
            password = ''.join(random.choices(random_texts, k=int(length)))
        else:
            file = open('words.txt')
            words = file.readlines()
            word = random.choice(words)
            left = ''.join(random.choices(random_texts, k=int(length) - len(word)))
            password = word.replace('\n', '') + left
    else:
        for i in range(int(count)):
            if not common:
                multiple_password.append(''.join(random.choices(random_texts, k=int(length))))
            else:
                file = open('words.txt')
                words = file.readlines()
                word = random.choice(words)
                left = ''.join(random.choices(random_texts, k=int(length) - len(word)))
                multiple_password.append(word.replace('\n', '') + left)
    return render(request, 'passwords.html', {'password': password, 'multiple_password': multiple_password})
