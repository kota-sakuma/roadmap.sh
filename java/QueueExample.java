import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

class QueueExample {

  public static void main(String[] args) {
    // 3 types of queues
    Queue<Integer> fifoQueue = new LinkedList<>();
    Queue<Integer> priorityQueue = new PriorityQueue<>();
    Deque<Integer> deque = new ArrayDeque<>();

    // Add data to queues
    List<Integer> data = List.of(30, 10, 20);
    fifoQueue.addAll(data);
    priorityQueue.addAll(data);
    deque.addAll(data);

    // Print queues and drain to list
    printQueues(fifoQueue, priorityQueue, deque);
  }

  private static void printQueues(Queue<?> ... queues) {
    for (Queue<?> queue : queues) {
      System.out.println(drainToList(queue) + " : " + queue.getClass().getSimpleName());
    }
  }

  private static <E> List<E> drainToList(Queue<E> queue) {
    List<E> result = new ArrayList<>();
    while (!queue.isEmpty()) {
      result.add(queue.poll());
    }
    return result;
  }
}


