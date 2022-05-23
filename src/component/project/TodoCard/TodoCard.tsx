import Image from 'next/image';
import { LogicProps, TodoCardProps } from './TodoCard.type';

export const baseId = 'project-todo-card';

export const TodoCard: React.FC<TodoCardProps & LogicProps> = ({
  title,
  titleStyle,
  showList,
  addImage,
  crossImage,
  openCreate,
  isTodo,
  isComplete,
  openDescription,
  openDelete,
}) => (
  <div className='relative mt-9 bg-white shadow-md shadow-primary-200'>
    <span className={titleStyle}>{title}</span>
    <div className='pt-2.5 pr-4 text-right'>
      <Image
        src={addImage.src}
        alt={addImage.alt}
        width={addImage.width}
        height={addImage.height}
        className='opacity-70 hover:cursor-pointer hover:opacity-100'
        onClick={openCreate}
      />
    </div>
    <div className='py-5'>
      {isTodo === undefined ? (
        <></>
      ) : (
        isTodo.map(
          (todo, index) =>
            todo.isComplete === showList && (
              <div key={index} className='my-2 flex items-center gap-3 px-5'>
                <input
                  type='checkbox'
                  className='checkbox'
                  defaultChecked={todo.isComplete}
                  onChange={(e) => isComplete(e, index)}
                />
                <p
                  className='text-base font-bold text-primary-800 hover:cursor-pointer hover:opacity-70'
                  onClick={() => openDescription(index)}
                >
                  {todo.title}
                </p>
                <Image
                  src={crossImage.src}
                  alt={crossImage.alt}
                  width={crossImage.width}
                  height={crossImage.height}
                  className='opacity-70 hover:cursor-pointer hover:opacity-100'
                  onClick={() => openDelete(index)}
                />
              </div>
            ),
        )
      )}
    </div>
  </div>
);
