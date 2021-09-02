#Sudoku
import numpy as np
import time

start = time.process_time()

# Setup
fIn=open("inputFile.txt")
board=np.array([ [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]])
blankCount=0
blankX=[]
blankY=[]

# Read in the board
i=0
while i<9:
    boardIn=fIn.readline()
    line = boardIn.split(" ")
    j = 0
    while j < 9:
        line[j] = int(line[j])
        if(line[j]==0):
            blankCount+=1
            blankX.append(i)
            blankY.append(j)
        j += 1
    board[i]=line
    i+=1

print("Given: ")
print(board)
print("Number of blanks: "+str(blankCount))
print()



# 运行
def process():
    # 竖列排除
    i = 0
    while i < blankCount:
        if(-1 in possibility[i]):
            i+=1
            continue
        r = 0
        while r < 9:
            num = board[r][blankY[i]]
            if (num == 0):
                r += 1
                continue
            else:
                if (num in possibility[i]):
                    possibility[i].remove(num)
            r += 1
        if (len(possibility[i]) == 1 and possibility[i][0] != -1):
            board[blankX[i]][blankY[i]] = possibility[i][0]
            possibility[i][0] = -1
            process()
        i += 1

    # 横排排除
    i = 0
    while i < blankCount:
        if (-1 in possibility[i]):
            i += 1
            continue
        r = 0
        while r < 9:
            num = board[blankX[i]][r]
            if (num == 0):
                r += 1
                continue
            else:
                if (num in possibility[i]):
                    possibility[i].remove(num)
            r += 1
        if (len(possibility[i]) == 1 and possibility[i][0] != -1):
            board[blankX[i]][blankY[i]] = possibility[i][0]
            possibility[i][0] = -1
            process()
        i += 1

    # 方格内排除
    i = 0
    fangGeX = []
    fangGeY = []

    for x in blankX:
        fangGeX.append(int(x / 3))

    for y in blankY:
        fangGeY.append(int(y / 3))

    i = 0
    while i < blankCount:
        if (-1 in possibility[i]):
            i += 1
            continue
        fangGex = fangGeX[i] * 3
        fangGey = fangGeY[i] * 3
        r = 0
        while r < 3:
            c = 0
            while c < 3:
                num = board[fangGex + r][fangGey + c]
                if (num == 0):
                    c += 1
                    continue
                else:
                    if (num in possibility[i]):
                        possibility[i].remove(num)
                c += 1
            r += 1
        if (len(possibility[i]) == 1 and possibility[i][0] != -1):
            board[blankX[i]][blankY[i]] = possibility[i][0]
            possibility[i][0] = -1
            process()
        i += 1

    # Row Possibility Exclusion
    i=0
    while i<blankCount:
        if(-1 in possibility[i]):
            i+=1
            continue
        j=0
        while j < len(possibility[i]):
            num=possibility[i][j]
            flag=-1
            m=0
            while m<blankCount:
                if(blankX[m]==blankX[i] and m!=i):
                    if (num in possibility[m]):
                        flag = 1
                        m += 1
                        continue
                    else:
                        m += 1
                else:
                    m+=1
                    continue

            if(flag==-1):
                board[blankX[i]][blankY[i]]=num
                possibility[i] = [-1]
                process()
            j+=1
        i+=1

    # Column Possibility Exclusion
    i=0
    while i<blankCount:
        if(-1 in possibility[i]):
            i+=1
            continue
        j=0
        while j < len(possibility[i]):
            num=possibility[i][j]
            flag=-1
            m=0
            while m<blankCount:
                if(blankY[m]==blankY[i] and m!=i):
                    if (num in possibility[m]):
                        flag = 1
                        m += 1
                        continue
                    else:
                        m += 1
                else:
                    m+=1
                    continue

            if(flag==-1):
                board[blankX[i]][blankY[i]]=num
                possibility[i] = [-1]
                process()
            j+=1
        i+=1

    # FangGe Possibility Exclusion
    i=0
    while i<blankCount:
        if(-1 in possibility[i]):
            i+=1
            continue
        fX=int(blankX[i]/3)
        fY=int(blankY[i]/3)
        fX+=1
        fY+=1
        fX*=3
        fY*=3

        j=0
        while j < len(possibility[i]):
            num=possibility[i][j]
            flag=-1
            m=0
            while m<blankCount:
                if(blankX[m]<fX and blankY[m]<fY and m!=i):
                    if (num in possibility[m]):
                        flag = 1
                        m += 1
                        continue
                    else:
                        m += 1
                else:
                    m+=1
                    continue

            if(flag==-1):
                board[blankX[i]][blankY[i]]=num
                possibility[i] = [-1]
                process()
            j+=1
        i+=1


# Run
possibility = [[1, 2, 3, 4, 5, 6, 7, 8, 9]] * blankCount
i=0
while i<blankCount:
    possibility[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    i+=1
process()

# Final print board
end = time.process_time()

print("Result: ")
print(board)

missCount=0
for a in possibility:
    if(-1 in a):
        continue
    else:
        missCount+=1
print("Number of misses: "+ str(missCount))

print("Time taken: "+str(round((end-start)*1000, 3))+"ms")

# File Output
fOut=open("outputFile.txt", "w")
boardString=""
for r in board:
    for c in r:
        boardString=boardString+str(c)+" "
    boardString=boardString+"\n"
fOut.write(boardString)


# Close files
fIn.close()
fOut.close()

