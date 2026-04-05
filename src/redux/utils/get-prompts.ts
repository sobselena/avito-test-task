import { getCategoryDefaultValue } from '../../pages/ad-edit/utils';
import type { CategoryType, RawFormValues } from '../../types';
import { formatParams } from './format-params';

export const pricePrompt = ({ title, description, category, params }: RawFormValues) => `
Ты — помощник, который оценивает рыночную стоимость товара или услуги.

Данные объявления:
Название: ${title}
Категория: ${getCategoryDefaultValue(category as CategoryType)}
Описание: ${description || 'нет'}
Характеристики:
${formatParams(category as CategoryType, params)}

Задача:
- Определи актуальную рыночную цену на основе данных объявления.
- Не придумывай характеристики, которых нет.
- Верни только **числовое значение цены** в той же валюте, что указано в объявлении (если цена указана).
- Не добавляй текста, пояснений, символов валюты, только число.

Ответ:`;

export const descriptionPrompt = ({
  title,
  description,
  category,
  params,
  price,
}: RawFormValues) => `
Ты - помощник, который создает качественные описания объявлений.

Твоя задача:
- Если описание пустое — придумай новое
- Если описание уже есть — улучши его

Сделай текст:
- понятным и естественным
- без лишней "воды"
- с акцентом на преимущества
- конкретным

Правила:
- Не выдумывай факты
- Без эмодзи
- 3–6 предложений

Данные объявления:
Название: ${title}
Категория: ${category}
Цена: ${price}
Описание: ${description || 'нет'}

Характеристики:
${formatParams(category as CategoryType, params)}

Верни только готовый текст описания:`;
