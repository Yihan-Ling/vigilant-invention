from tic_tac_toe_AI import AI
import numpy as np


def human_move(board):
    print("Your turn: ")
    x = int(input())
    y = int(input())
    valid = True
    if x >= 3 or x < 0 or y >= 3 or y < 0 or board[x][y] != '_':
        valid = False

    while not valid:
        print("Wrong input, try again:")
        x = int(input())
        y = int(input())
        valid = True
        if x >= 3 or x < 0 or y >= 3 or y < 0 or board[x][y] != '_':
            valid = False

    else:
        board[x][y] = 'X'
        return board


def check_win(status):
    for i in range(3):
        if status[i][0] == status[i][1] == status[i][2] and status[i][0] != '_':
            return True
        if status[0][i] == status[1][i] == status[2][i] and status[0][i] != '_':
            return True

    if status[0][0] == status[1][1] == status[2][2] and status[0][0] != '_':
        return True
    if status[0][2] == status[1][1] == status[2][0] and status[0][2] != '_':
        return True

    return False


if __name__ == "__main__":
    Board = np.array([['_', '_', '_'] for i in range(3)])
    print(Board)
    win = False

    opponent = AI()

    for i in range(5):
        Board = human_move(board=Board)
        if check_win(status=Board):
            print("You win!!!")
            break

        if i == 4:
            print("Tie!")
            break

        Board = opponent.move(Board)
        print(Board)
        if check_win(status=Board):
            print("AI wins!!!")
            break
